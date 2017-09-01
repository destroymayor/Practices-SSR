const React = require("react");
const Title = require("./component/title");
const Mid = require("./component/Mid");

class App extends React.Component {
  render() {
    const { title, h1, text } = this.props;
    return (
      <div>
        <Title titles={title} />
        <Mid h1={h1} text={text} />
      </div>
    );
  }
}

module.exports = App;
