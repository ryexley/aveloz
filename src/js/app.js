import path from "path";
import { assign as _extend } from "lodash";
import React, { Component } from "react";
import messenger from "sumac/dist/messenger";
import File from "./model/file";
import Document from "./components/document";
import Toolbar from "./components/toolbar";

class App extends Component {

  constructor () {
    super();
    this.channel = "aveloz";
    this.configureMessaging({ wiretap: { enable: true } });
    this.state = {
      source: "# New Document",
      html: "Document not yet parsed"
    };

    this.trigger("ready", { file: "/foo/bar" });
  }

  render () {
    return (
      <section className="app">
        <Toolbar />
        <Document file={this.state} />
      </section>
    );
  }

  componentDidMount () {
    this.getFileData();
  }

  getFileData () {
    const readme = new File(path.resolve("README.md"));
    setTimeout(() => {
      this.setState(readme);
    }, 500);
    // readme.open((err, contents) => {
    //   if (err) {
    //     console.log("ERROR opening file:", err);
    //   }

    //   this.setState({
    //     documentContents: contents
    //   });
    // });
  }

};

_extend(App.prototype, messenger, {

  messages: {
    ready: "aveloz app.ready"
  }

});

export default App;
