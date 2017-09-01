const React = require("react");
const Layout = require("./Layout");

class Error extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Layout title={title}>
        <h1 style={{ margin: 50 }}>您訪問的頁面不存在</h1>
      </Layout>
    );
  }
}

module.exports = Error;
