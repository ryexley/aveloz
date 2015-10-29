import { assign as _extend } from "lodash";
import React, { Component } from "react";
import messenger from "sumac/dist/messenger";
import Editor from "./markdown-editor";
import Preview from "./preview";

class Document extends Component {

  constructor () {
    super();
    this.configureMessaging({ wiretap: { enable: true } });
    this.state = {
      source: "# New Document",
      html: "Document not yet parsed"
    };
  }

  render () {
    return (
      <section className="document">
        <Editor source={this.state.source} documentId={this.state.id} />
        <Preview html={this.state.html} documentId={this.state.id} />
      </section>
    );
  }

  renderDocument (data, env) {
    this.setState(data.document);
  }

  onSourceUpdated (data, env) {
    var updatedDocument = _extend(this.state, {
      source: data.updatedSource
    });

    this.setState(updatedDocument);
  }

  onPreviewUpdated (data, env) {
    var updatedDocument = _extend(this.state, {
      html: data.updatedHtml
    });

    this.setState(updatedDocument);
  }

};

_extend(Document.prototype, messenger, {

  channelName: "Document",

  subscriptions: {
    renderDocument: "Document file.ready",
    onSourceUpdated: "Document source.updated",
    onPreviewUpdated: "Document preview.updated"
  }

});

export default Document;
