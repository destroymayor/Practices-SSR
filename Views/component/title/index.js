const React = require("react");

class Title extends React.Component {
  render() {
    return <div className="Title">{this.props.titles}</div>;
  }
}

module.exports = Title;
