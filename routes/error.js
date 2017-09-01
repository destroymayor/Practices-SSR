const express = require("express");
const router = express.Router();

router.get("*", (req, res) => {
  res.render("Error", { title: "您訪問的頁面不存在" });
});

module.exports = router;
