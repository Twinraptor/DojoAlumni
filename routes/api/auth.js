const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route Get Api/auth
// @desc test route
// @access public

router.get("/", auth, (req, res) => res.send("Auth route"));

module.exports = router;
