import path from "path";
import React, { Component } from "react";
import File from "./model/file";
import Document from "./components/document";
import Toolbar from "./components/toolbar";

let App = React.createClass({

  getInitialState () {
    return {
      documentContents: "# New Document"
    }
  },

  render () {
    return (
      <section className="app">
        <Toolbar />
        <Document source={this.state.documentContents} />
      </section>
    );
  },

  componentDidMount () {
    this.getFileData();
  },

  getFileData () {
    const readme = new File(path.resolve("README.md"));
    readme.open((err, contents) => {
      if (err) {
        console.log("ERROR opening file:", err);
      }

      this.setState({
        documentContents: contents
      });
    });
  }

});

export default App;
