const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div style={{ color: "#222" }}>
        <h1>React + {this.props.title}</h1>
        <p>hello {this.props.text}</p>
      </div>
    );
  }
}

module.exports = Index;
