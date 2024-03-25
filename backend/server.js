const {v4: uuidv4} = require('uuid');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const bcrypt = require('bcrypt');
const session = require('express-session');
const db = require('./db')
require('dotenv').config();

const app = express();
const PORT = 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

// Schedule to delete data every day
cron.schedule('0 0 * * *', () => {
    console.log('Checking for old chats to delete...');
    deleteOldData();
});
deleteOldData()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Compare passwords
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

/* Generate unique chat id */
const createChatID = (req) => {
    const uuid = uuidv4();
    req.session.CurrentChatId = uuid;
};

// Function to delete data older than 30 days
function deleteOldData() {

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const formattedDate = thirtyDaysAgo.toISOString().split('T')[0];

    // Get old chat id's
    const retrieveQuery = process.env.RETRIEVEOLDDATA_QUERY;
    db.query(retrieveQuery, [formattedDate], (error, results) => {
        if (error) {
            console.error('Error retrieving old data:', error);
        } else {

            // If results array is empty, exit the function
            if (results.length === 0) {
                console.log('No old conversations found to delete.');
                return;
            }

            const chatIDsToDelete = results.map(result => result.chatID);

            // Generate the placeholders for the parameterized query
            const placeholders = chatIDsToDelete.map(() => '?').join(',');

            const deleteQuery = process.env.DELETEOLDDATA_QUERY.replace('{placeholders}', placeholders);

            // Delete old chats with ids
            db.query(deleteQuery, chatIDsToDelete, (deleteError, deleteResults) => {
                if (deleteError) {
                    console.error('Error deleting old data:', deleteError);
                } else {
                    console.log('Old data deleted successfully.');
                }
            });
        }
    });
}

// Endpoint for creating a new chat id from client side
app.post('/generateChat', (req, res) => {
    if (req.session.isAuthenticated) {
        createChatID(req);
        res.send('Chat generated successfully');
    } else {
        res.status(403).send('Unauthorized');
    }
});

// Login logic
app.post('/login', async (req, res) => {
    const {username, password} = req.body;

    // Retrieve the hashed password from the database based on the username
    const query = process.env.LOGIN_QUERY;

    db.query(query, [username], async (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).json({error: 'Error querying the database:'});
        }

        if (results.length === 0) {
            return res.status(401).json({error: 'Invalid username'});
        }

        const pswdVariable = process.env.PASSWORD
        const hashedPassword = results[0][pswdVariable];

        // Compare the provided password with the hashed password from the database
        const passwordsMatch = await comparePassword(password, hashedPassword);

        if (passwordsMatch) {
            // Authentication successful
            req.session.isAuthenticated = true;
            // Get the id of logged-in user
            req.session.loggedInUserId = results[0].id
            // Create new chat id
            createChatID(req);

            res.json(true);
        } else {
            // Authentication failed
            res.status(401).json({error: 'Invalid credentials'});
        }
    });
});

// Logout handle
app.get('/logout', (req, res) => {
    // Destroy the user's session to log them out
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({error: 'Server error'});
        }
        // Send a response indicating successful logout
        res.status(200).json({message: 'Logout successful'});
    });
});

/* Convert the date from database to more readable format */
function convertDatabaseDate(dateString) {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

/* Get date for saving in database */
function getDatabaseDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

// Save messages to database
app.put('/saveMessages', (req, res) => {
    /* If user is logged in */
    if (req.session.isAuthenticated) {
        /* Retrieve all the messages */
        const messages = req.body.storedMessages;

        if (!messages || messages.length === 0) {
            return res.status(400).json({error: 'No messages provided'});
        }

        // Map each message to add the correct userId
        const messagesWithUserId = messages.map(message => ({
            ...message,
            userId: req.session.loggedInUserId,
            chatId: req.session.CurrentChatId,
            time: getDatabaseDate(),
        }));

        const query = process.env.SAVEMESSAGE_QUERY;

        // Iterate over each message and save it to the database if it hasn't been sent before
        messagesWithUserId.forEach(message => {
            const {orderId, userId, chatId, userMessage, time, message: msg} = message;

            // Execute the query for each message
            db.query(query, [orderId, userId, chatId, userMessage, time, msg], (err, results) => {
                if (err) {
                    console.error('Error querying the database:', err);
                }
            });

        });

        res.json({success: true, message: 'Messages saved successfully'});
    } else {
        res.status(401).json({error: 'User is not authenticated'});
    }
});

// Retrieve all user chats
app.get('/userChats', (req, res) => {
    // Check if the user is authenticated
    if (!req.session.isAuthenticated) {
        return res.status(401).json({error: 'Unauthorized'});
    }

    // Execute a SQL query to retrieve message chat id and message time values
    const query = process.env.GETUSERCHATS_QUERY;
    db.query(query, [req.session.loggedInUserId], (error, results) => {
        if (error) {
            console.error('Error fetching messages:', error);
            res.status(500).json({error: 'Internal server error'});
        } else {

            // Truncate messages length and format date
            const truncatedResults = results.map(result => {
                const truncatedMessage = result.message.length > 65 ? result.message.substring(0, 65) : result.message;
                const formattedTime = convertDatabaseDate(result.time);
                return {...result, message: truncatedMessage, time: formattedTime};
            });

            res.json(truncatedResults);
        }
    });
});

// Retrieve specific user conversation
app.get('/previousChat', (req, res) => {
    // Check if the user is authenticated
    if (!req.session.isAuthenticated) {
        return res.status(401).json({error: 'Unauthorized'});
    }

    // Retrieve chat ID from the request body
    const {chatId} = req.query;
    // Make sure chatId exists
    if (!chatId) {
        return res.status(400).json({error: 'Chat ID is required'});
    }

    req.session.CurrentChatId = chatId;

    const query = process.env.GETPREVIOUSCHAT_QUERY;
    db.query(query, [chatId, req.session.loggedInUserId], (error, results) => {
        if (error) {
            console.error('Error fetching messages:', error);
            res.status(500).json({error: 'Internal server error'});
        } else {

            res.json(results);
        }
    });
});

// Retrieve answer for user question
app.post('/question', async (req, res) => {
    // Check if the user is authenticated
    if (!req.session.isAuthenticated) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { question } = req.body;
    const secretKey = process.env.SECRET_KEY;

    try {
        const response = await fetch('http://127.0.0.1:5001/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question, secretKey }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});
