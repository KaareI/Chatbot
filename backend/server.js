const {v4: uuidv4} = require('uuid');
const express = require('express');
const cors = require('cors');
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
    /*    console.log("Created chat id: ", uuid);
        console.log("Length of chat id: ", uuid.length);*/
    req.session.CurrentChatId = uuid;
};

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

        const hashedPassword = results[0].User_Password;
        /*        console.log("Results",results[0])*/

        // Compare the provided password with the hashed password from the database
        const passwordsMatch = await comparePassword(password, hashedPassword);

        if (passwordsMatch) {
            // Authentication successful
            // Create new chat id
            // Get the id of logged-in user
            /*            console.log("logged-in user id", results[0].id)*/
            createChatID(req);
            req.session.loggedInUserId = results[0].id
            req.session.isAuthenticated = true;
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

function getDate() {
    const date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

// Define a set to keep track of message IDs that have been sent
const sentMessageIds = new Set();
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
            time: getDate(),
        }));

        const query = process.env.SAVEMESSAGE_QUERY;

        // Iterate over each message and save it to the database if it hasn't been sent before
        messagesWithUserId.forEach(message => {
            const {uniqueId, orderId, userId, chatId, userMessage, time, message: msg} = message;

            // Check if the message ID has been sent before
            if (!sentMessageIds.has(uniqueId)) {

                // Execute the query for each message
                db.query(query, [orderId, userId, chatId, userMessage, time, msg], (err, results) => {
                    if (err) {
                        console.error('Error querying the database:', err);
                    }
                });

                // Add the message ID to the set of sent messages
                sentMessageIds.add(uniqueId);
            }
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

            console.log("Rewriting keys")
            // Rewrite keys
            const updatedData = results.map(message => {
                return {
                    message: message[process.env.MESSAGE_VARIABLE],
                    chatId: message[process.env.CHATID_VARIABLE],
                    time: message[process.env.TIME_VARIABLE]
                };
            });

            // Assuming `results` is an array of objects with a `message` property

            const truncatedResults = updatedData.map(result => {
                const truncatedMessage = result.message.length > 35 ? result.message.substring(0, 35) : result.message;
                return { ...result, message: truncatedMessage };
            });

            console.log(truncatedResults)

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
    /*    console.log("Chat Id: ", chatId)
        console.log("Chat Id length: ", chatId.length)
        console.log("Chat Id type: ", typeof chatId)*/
    // Make sure chatId exists
    if (!chatId) {
        return res.status(400).json({error: 'Chat ID is required'});
    }

    const query = process.env.GETPREVIOUSCHAT_QUERY;
    db.query(query, [chatId, req.session.loggedInUserId], (error, results) => {
        if (error) {
            console.error('Error fetching messages:', error);
            res.status(500).json({error: 'Internal server error'});
        } else {

/*            console.log(results)*/

            console.log("Rewriting keys")
            // Rewrite keys
            const updatedData = results.map(message => {
                return {
                    message: message[process.env.MESSAGE_VARIABLE],
                    orderId: message[process.env.ORDERID_VARIABLE],
                    userMessage: message[process.env.USERMESSAGE_VARIABLE]
                };
            });

            res.json(updatedData);
        }
    });
});
