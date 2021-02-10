const Meme = require("../models/memes");

exports.getLatest = async (req, res) => {
  try {
    // Fetch all the Memes from the Database and store as array of objecs
    let response = await Meme.find({}, { __v: 0 });

    // Sort the Memes(latest first) and send the first 100 Memes
    response = response
      .sort((a, b) => {
        if (a.date < b.date) return 1;
        else return -1;
      })
      .slice(0, 100);

    // Map the default _id field in databse to id
    let Memes = [];
    for (let i = 0; i < response.length; i++) {
      Memes.push(response[i].transform());
    }
    res.send(Memes);
  } catch (err) {
    // Internal Server Error
    res.sendStatus(500);
  }
};

exports.getId = async (req, res) => {
  try {
    // Query the Database to find Meme info for the given id
    const meme = await Meme.findById(req.params.id, { __v: 0 });
    res.send(meme.transform());
  } catch (err) {
    // Meme with specified id not found in the Database
    res.status(404).send("Meme not found");
  }
};

exports.create = async (req, res) => {
  try {
    //  If name/url/caption field is empty send error (Not Acceptable)
    if (!req.body.name || !req.body.url || !req.body.caption) {
      throw new Error("Not Acceptable");
    }
    // Create a new record of model Meme for the requested query parameters
    let newMeme = new Meme(req.body);
    // Check for duplicate entry
    const duplicate = await Meme.findOne({
      name: newMeme.name,
      url: newMeme.url,
      caption: newMeme.caption
    });
    if (duplicate) throw new Error("Error! same meme not allowed.");

    // Save Meme info in Database
    const meme = await newMeme.save();

    console.log("Meme info saved successfully...");
    console.log(JSON.stringify(meme));
    // Send the id of the saved Meme as response
    res.send(JSON.stringify({ id: meme.id }));
  } catch (err) {
    if (err.message === "Not Acceptable") res.sendStatus(406);
    // If meme with {name, caption, url} posted by user already available in database
    if (err.message === "Error! same meme not allowed.")
      res.status(409).send(err.message);
    // Internal Server Error
    res.sendStatus(500);
  }
};
