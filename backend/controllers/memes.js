const Meme = require("../models/memes");

exports.index = function(req, res) {
  Meme.find({}, { __v: 0 })
    .sort({ date: -1 })
    .then(Memes => {
      res.send(Memes.slice(0, 100));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: e.message });
    });
};

exports.getLatest = function(req, res) {
  Meme.find({}, { __v: 0 })
    .sort({ date: -1 })
    .then(Memes => {
      res.send(Memes.slice(0, 100));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: e.message });
    });
};

exports.getId = async function(req, res) {
  try {
    const meme = await Meme.findById(req.params.id, { __v: 0 });
    if (!meme) throw Error("No meme found");
    res.send(meme);
  } catch (e) {
    res.sendStatus(404);
  }
};

exports.create = function(req, res) {
  let newMeme = new Meme(req.query);
  newMeme
    .save()
    .then(meme => {
      console.log("Meme info saved successfully...");
      console.log(JSON.stringify(meme));
      res.send(JSON.stringify({ id: meme.id }));
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ msg: e.message });
    });
};
