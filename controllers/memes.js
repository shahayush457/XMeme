const path = require("path");
const Meme = require("../models/memes");

exports.index = function(req, res) {
  res.sendFile(path.resolve("views/sharks.html"));
};

exports.create = function(req, res) {
  let newMeme = new Meme(req.body);
  console.log(req.body);
  newMeme.save(err => {
    if (err) {
      res.status(400).send("Unable to save meme to database");
    } else {
    }
  });
};

exports.list = function(req, res) {
  Shark.find({}).exec(function(err, sharks) {
    if (err) {
      return res.send(500, err);
    }
    res.render("getshark", {
      sharks: sharks
    });
  });
};
