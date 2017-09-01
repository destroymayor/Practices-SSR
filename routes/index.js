module.exports = app => {
  app.use("/", require("./App"));
  app.use("*", require("./error"));
};
