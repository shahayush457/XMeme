const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Meme = new Schema({
  username: {
    type: String,
    required: true,
    description: "Creator of the meme"
  },
  caption: {
    type: String,
    required: true,
    description: "Creative caption for the meme"
  },
  url: {
    type: String,
    required: true,
    description: "Publicly accessible URL of the meme"
  }
});

const memes = mongoose.model("Memes", Meme);
module.exports = memes;
