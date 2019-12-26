const express = require("express");
const router = express.Router();

// @route Get Api/profile
// @desc test route
// @access public

router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
