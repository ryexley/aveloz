import React, { Component } from "react";
import Editor from "./markdown-editor";
import Preview from "./preview";

let Document = React.createClass({

  render () {
    console.log(this.props);
    return (
      <section className="document">
        <Editor source={this.props.file.source} />
        <Preview html={this.props.file.html} />
      </section>
    );
  }

});

export default Document;
