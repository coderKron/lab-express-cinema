const express = require("express");
const router = express.Router();
/* GET home page */

const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
