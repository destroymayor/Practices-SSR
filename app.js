const express = require("express");
const http = require("http");
const path = require("path");
const errorHandler = require("errorhandler");
const logger = require("morgan");

const reactViews = require("express-react-views");

const routes = require("./routes");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "js");
app.engine("js", reactViews.createEngine());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "/public")));

if ("development" == app.get("env")) {
  app.use(errorHandler());
}

routes(app);

app.listen(process.env.PORT || 5000);
