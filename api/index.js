const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const APP_PORT = 8082;

// load the .env entries
dotenv.config();

// connect to our database
mongoose
    .connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => { console.log('Successfully connected to the database'); },
        (err) => { console.log('An error ocurred when connecting to the database.', err); }
    );

// start the web server
app.listen(APP_PORT, () => {
    console.log(`Backend server running on port ${APP_PORT}`);
})