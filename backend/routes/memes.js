const express = require("express");
const meme = require("../controllers/memes");

const router = express.Router();

/**
 * @route     GET /
 * @desc      GET all the memes
 * @access    Public
 */

router.get("/", (req, res) => {
  meme.index(req, res);
});

/**
 * @route     GET /memes
 * @desc      GET the latest 100 memes
 * @access    Public
 */

router.get("/memes", (req, res) => {
  meme.getLatest(req, res);

  /*try {
      const memes = [];
      res.render("index", {
        memes
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Error while getting memes");
    }*/
});

/**
 * @route   GET /memes/:id
 * @desc    GET meme by id
 * @access  Public
 */

router.get("/memes/:id", (req, res) => {
  meme.getId(req, res);
});

/**
 * @route     POST /memes
 * @desc      Create a record in the database
 * @access    Public
 */

router.post("/memes", (req, res) => {
  meme.create(req, res);

  // try {
  //   //console.log(memes);
  //   // res.render("index", {
  //   //   memes
  //   // });
  // } catch (error) {
  //   console.log(error);
  //   res.status(400).send("Error while getting memes");
  // }
});

module.exports = router;
