const mongoose = require("mongoose");

const MONGO_USERNAME = "shahayush457";
const MONGO_PASSWORD = process.env.DB_PASS;
const MONGO_HOSTNAME = "127.0.0.1";
const MONGO_PORT = "27017";
const MONGO_DB = "memewar";

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, { useNewUrlParser: true });
