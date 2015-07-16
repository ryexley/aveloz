import React, { Component } from "react";
import Document from "./components/document";

let App = React.createClass({

  render () {
    return (
      <section className="document-container">
        <Document />
      </section>
    );
  }

});

export default App;
