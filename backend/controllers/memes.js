const Meme = require("../models/memes");

exports.index = async (req, res) => {
  try {
    // Fetch all the Memes from the Database and store as array of objecs
    const Memes = await Meme.find({}, { __v: 0 });

    // Sort the Memes(latest first) and send the first 100 Memes
    res.send(Memes.sort({ date: -1 }).slice(0, 100));
  } catch (err) {
    // Internal Server Error
    res.sendStatus(500);
  }
};

exports.getLatest = async (req, res) => {
  try {
    // Fetch all the Memes from the Database and store as array of objecs
    const Memes = await Meme.find({}, { __v: 0 });

    // Sort the Memes(latest first) and send the first 100 Memes
    res.send(Memes.sort({ date: -1 }).slice(0, 100));
  } catch (err) {
    // Internal Server Error
    res.sendStatus(500);
  }
};

exports.getId = async (req, res) => {
  try {
    // Query the Database to find Meme info for the given id
    const meme = await Meme.findById(req.params.id, { __v: 0 });

    res.send(meme);
  } catch (e) {
    // Meme with specified id not found in the Database
    res.status(404).send("Meme not found");
  }
};

exports.create = async (req, res) => {
  //  If name/url/caption field is empty send error (Not Acceptable)
  if (!req.query.name || !req.query.url || !req.query.caption) {
    res.sendStatus(406);
    return;
  }

  // Create a new record of model Meme for the requested query parameters
  let newMeme = new Meme(req.query);

  try {
    // Save Meme info in Database
    const meme = await newMeme.save();

    console.log("Meme info saved successfully...");
    console.log(JSON.stringify(meme));

    // Send the id of the saved Meme as response
    res.send(JSON.stringify({ id: meme.id }));
  } catch (err) {
    // Internal Server Error
    res.sendStatus(500);
  }
};
