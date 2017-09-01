const React = require("react");

class App extends React.Component {
  render() {
    const { h1, text } = this.props;
    return (
      <div>
        <h1 className="Mid-h1">
          {h1} {text}
        </h1>
        <input type="button" value="按鈕" />
      </div>
    );
  }
}

module.exports = App;
