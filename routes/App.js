const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("HTML", { text: "jared", title: "Express.js + Reactjs", h1: "歡迎" });
});

module.exports = router;
