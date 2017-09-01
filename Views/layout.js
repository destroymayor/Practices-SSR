const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/style/style.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            // This is making use of ES6 template strings, which allow for
            // multiline strings. We specified "{jsx: {harmony: true}}" when
            // creating the engine in app.js to get this feature.
          `
            }}
          />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = Layout;
