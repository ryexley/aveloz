import path from "path";
import React, { Component } from "react";
import File from "./model/file";
import Document from "./components/document";
import Toolbar from "./components/toolbar";

let App = React.createClass({

  getInitialState () {
    return {
      source: "# New Document",
      html: "Document not yet parsed"
    }
  },

  render () {
    return (
      <section className="app">
        <Toolbar />
        <Document file={this.state} />
      </section>
    );
  },

  componentDidMount () {
    this.getFileData();
  },

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

});

export default App;
