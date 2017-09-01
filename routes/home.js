const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { text: "ming", title: "Express.js + Reactjs" });
});

module.exports = router;
