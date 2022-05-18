const express = require("express");
const mongoose = require("mongoose");

const app = express(); 

const mongoUri = 'mongodb+srv://admin:Shibalnom1989$$@cluster0.ja7ea.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri) // connecting to mongooseDb

app.get("/", (req, res) => {
    res.send("hi");
});

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on('error', (err) => {
    console.error("Error connecting to mongo", err);
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
});

