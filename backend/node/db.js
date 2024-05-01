const mysql = require('mysql2');

// Load environment variables from .env file
require('dotenv').config();

// Access environment variables
const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// Database connection
const connection = mysql.createConnection({
    host,
    user,
    password,
    database,
});

// Creating connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database ID: ' + connection.threadId);
});

module.exports = connection;