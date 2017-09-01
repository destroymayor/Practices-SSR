exports.index = (req, res) => {
  res.render("index", { text: "ming", title: "Express" });
};

exports.Error = (req, res) => {
  res.render("Error");
};
