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

};

_extend(Document.prototype, messenger, {

  channel: "Document",

  subscriptions: {
    renderDocument: "DocumentCollection document.opened"
  }

});

export default Document;
