const React = require("react");

class Error extends React.Component {
  render() {
    const { title } = this.props;
    return <h1 style={{ margin: 50 }}>您訪問的頁面不存在</h1>;
  }
}

module.exports = Error;
