const express = require("express");
const memes = require("../controllers/memes");

const router = express.Router();

/**
 * @route     GET /memes
 * @desc      GET the latest 100 memes
 * @access    Public
 */

router.get("/", (req, res) => {
  memes.getLatest(req, res);
});

/**
 * @route     POST /memes
 * @desc      Create a record in the database
 * @access    Public
 */

router.post("/", (req, res) => {
  memes.create(req, res);
});

/**
 * @route   GET /memes/:id
 * @desc    GET meme by id
 * @access  Public
 */

router.get("/:id", (req, res) => {
  memes.getById(req, res);
});

/**
 * @route   PATCH /memes/:id
 * @desc    Update meme caption or url or both but not the name
 * @access  Public
 */

router.patch("/:id", (req, res) => {
  memes.updateById(req, res);
});

module.exports = router;
