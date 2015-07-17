import React, { Component } from "react";
import Document from "./components/document";
import Toolbar from "./components/toolbar";

let App = React.createClass({

  render () {
    return (
      <section className="app">
        <Toolbar />
        <Document />
      </section>
    );
  }

});

export default App;
