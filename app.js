const express = require("express");
const path = require("path");
const logger = require("morgan");
const reactViews = require("express-react-views");

const routes = require("./routes");

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "js");
app.engine("js", reactViews.createEngine({ beautify: true }));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "/public")));

routes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("App is now running");
});
