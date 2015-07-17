import React, { Component } from "react";
import Editor from "./markdown-editor";
import Preview from "./preview";

let Document = React.createClass({

  render () {
    return (
      <section className="document">
        <Editor source={this.props.source} />
        <Preview />
      </section>
    );
  }

});

export default Document;
