import React, { Component } from "react";
import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";
import DocumentActions from "../actions/document";

const documentActions = new DocumentActions();

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
    documentActions.sourceChanged({
      updatedSource: e.target.value,
      fileId: this.props.documentId
    });
  }

};

_extend(MarkdownEditor.prototype, messenger, {

  channelName: "Document"

});

export default MarkdownEditor;
