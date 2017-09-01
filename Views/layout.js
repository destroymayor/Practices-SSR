const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <div style={{ color: "#222" }}>
        <h1>使用React + {this.props.h1}</h1>
        <p>hello {this.props.text}</p>
      </div>
    );
  }
}

module.exports = Layout;
