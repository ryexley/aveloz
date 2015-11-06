import path from "path";
import { assign as _extend } from "lodash";
import React, { Component } from "react";
import messenger from "sumac/dist/messenger";
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
    this.trigger("openFile", { filepath: path.resolve("README.md") });
  }

};

_extend(App.prototype, messenger, {

  channelName: "app",

  messages: {
    openFile: "app file.open"
  }

});

export default App;
