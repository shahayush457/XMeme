const express = require("express");
const meme = require("../controllers/memes");

const router = express.Router();

/**
 * @route     GET /memes
 * @desc      GET the latest 100 memes
 * @access    Public
 */

router.get("/", (req, res) => {
  meme.getLatest(req, res);
});

/**
 * @route   GET /memes/:id
 * @desc    GET meme by id
 * @access  Public
 */

router.get("/:id", (req, res) => {
  meme.getId(req, res);
});

/**
 * @route     POST /memes
 * @desc      Create a record in the database
 * @access    Public
 */

router.post("/", (req, res) => {
  meme.create(req, res);
});

module.exports = router;
