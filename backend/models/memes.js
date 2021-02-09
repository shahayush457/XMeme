const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Meme = new Schema({
  name: {
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
  },
  date: {
    type: Date,
    default: Date.now
  }
});

Meme.method("transform", function() {
  let obj = this.toObject();

  //Rename fields
  obj["id"] = obj._id;
  delete obj._id;

  return obj;
});

const memes = mongoose.model("Memes", Meme);
module.exports = memes;
