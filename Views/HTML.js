const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("./App");

class HTML extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
            integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/style/style.css" />
        </head>
        <body>
          <div
            id="content"
            dangerouslySetInnerHTML={{ __html: ReactDOMServer.renderToString(<App {...this.props} />) }}
          />
        </body>
      </html>
    );
  }
}

module.exports = HTML;
