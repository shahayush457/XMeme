const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// const MONGO_HOSTNAME = "localhost";
// const MONGO_PORT = "27017";
// const MONGO_DB = "memepage";

// const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const url = process.env.DB_URL;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(err => {
    console.log("Not Connected to Database ERROR! ", err);
  });
