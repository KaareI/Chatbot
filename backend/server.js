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

        // Compare the provided password with the hashed password from the database
        const passwordsMatch = await comparePassword(password, hashedPassword);

        if (passwordsMatch) {
            // Authentication successful
            req.session.isAuthenticated = true;
            res.json(true);
        } else {
            // Authentication failed
            res.status(401).json({error: 'Invalid credentials'});
        }
    });
});