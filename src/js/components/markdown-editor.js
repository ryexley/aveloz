import React, { Component } from "react";

let MarkdownEditor = React.createClass({

  render () {
    return (
      <section className="editor" contentEditable="true">
# Heading 1
## Heading 2

* Bullet 1
* Bullet 2
      </section>
    );
  }

});

export default MarkdownEditor;
