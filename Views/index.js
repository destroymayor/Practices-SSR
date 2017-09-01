const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App");

module.exports = (data, containerId) => {
  const container = document.getElementById(containerId || "content");
  ReactDOM.render(<App {...data} />, "content");
};
