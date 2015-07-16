import React, { Component } from "react";
import Editor from "./markdown-editor";
import Preview from "./preview";

let Document = React.createClass({

  render () {
    return (
      <section className="document">
        <Editor />
        <Preview />
      </section>
    );
  }

});

export default Document;
