import React, { Component } from "react";

let MarkdownEditor = React.createClass({

  render () {
    return (
      <section className="editor">
        <textarea value={this.props.source}></textarea>
      </section>
    );
  }

});

export default MarkdownEditor;
