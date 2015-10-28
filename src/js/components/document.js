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
        <Editor source={this.state.source} />
        <Preview html={this.state.html} />
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

};

_extend(Document.prototype, messenger, {

  channel: "Document",

  subscriptions: {
    renderDocument: "Document file.ready",
    onSourceUpdated: "Document source.updated"
  }

});

export default Document;
