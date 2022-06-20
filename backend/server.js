const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes

// middlewares

// config
const dbName = "partytime";
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(`mongodb://localhost/${dbName}`, async (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
    res.json({
        message: "Rota teste!"
    });
});

app.listen(port, () => {
    console.log(`O backend está rodando na porta ${port}`);
});