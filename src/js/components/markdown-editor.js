import React, { Component } from "react";
import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";

class MarkdownEditor extends Component {

  constructor () {
    super();
    this.configureMessaging({ wiretap: { enable: true } });
  }

  render () {
    return (
      <section className="editor">
        <textarea value={this.props.source} onChange={this.onMarkdownChanged.bind(this)} />
      </section>
    );
  }

  onMarkdownChanged (e) {
    this.trigger("onMarkdownChanged", { updatedSource: e.target.value });
  }

};

_extend(MarkdownEditor.prototype, messenger, {

  channel: "Document",

  messages: {
    onMarkdownChanged: "Document source.changed"
  }

});

export default MarkdownEditor;
