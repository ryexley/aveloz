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
    this.configureMessaging({ wiretap: { enable: true } });
  }

  render () {
    return (
      <section className="app">
        <Toolbar />
        <Document />
      </section>
    );
  }

  componentDidMount () {
    // this.getFileData();
    this.trigger("openFile", { filepath: path.resolve("README.md") });
  }

  getFileData () {
    // const readme = new File(path.resolve("README.md"));
    // setTimeout(() => {
    //   this.setState(readme);
    // }, 500);
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

  channel: "app",

  messages: {
    openFile: "app file.open"
  }

});

export default App;
