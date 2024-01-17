const express = require("express");
const { homepage } = require("../controller/indexController");
const router = express.Router();

//GET /
router.get("/",homepage
)

module.exports = router;