const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const db = require("./db");

dotenv.config();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  try {
    const memes = [];
    res.render("index", {
      memes
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error while getting memes");
  }
});

app.get("/memes", (req, res) => {
  try {
    const memes = [];
    res.render("index", {
      memes
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error while getting memes");
  }
});

app.post("/memes", (req, res) => {
  try {
    const memes = [];
    res.render("index", {
      memes
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error while getting memes");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
