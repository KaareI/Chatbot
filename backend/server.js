const { v4: uuidv4 } = require('uuid');
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

// Define a set to keep track of message IDs that have been sent
const sentMessageIds = new Set();
app.put('/saveMessages', (req, res) => {
    /* If user is logged in */
    if (req.session.isAuthenticated) {
        /* Retrieve all the messages */
        const messages = req.body.messages;

        if (!messages || messages.length === 0) {
            return res.status(400).json({error: 'No messages provided'});
        }

        // Map each message to add the correct userId
        const messagesWithUserId = messages.map(message => ({
            ...message,
            userId: req.session.loggedInUserId,
            chatId: req.session.CurrentChatId,
        }));

        const query = process.env.SAVEMESSAGE_QUERY;

        // Iterate over each message and save it to the database if it hasn't been sent before
        messagesWithUserId.forEach(message => {
            const {uniqueId, orderId, userId, chatId, userMessage, message: msg} = message;

            // Check if the message ID has been sent before
            if (!sentMessageIds.has(uniqueId)) {
                let formattedMessage;

                if (typeof msg === 'string') {
                    // If the message is a simple string, use it directly
                    formattedMessage = msg;
                } else {
                    // If the message is a complex object, stringify it
                    formattedMessage = JSON.stringify(msg);
                }

                // Execute the query for each message
                db.query(query, [orderId, userId, chatId, userMessage, formattedMessage], (err, results) => {
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