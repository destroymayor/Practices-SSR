const React = require("react");
const Layout = require("./Layout");

class Index extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <Layout title={title}>
        <h1>使用: {this.props.title}</h1>
        <p>Hello {this.props.text}</p>
      </Layout>
    );
  }
}

module.exports = Index;
