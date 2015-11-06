import React from "react";
import App from "./app";
import KeyboardShortcuts from "./util/keyboard-shortcuts";
import DocumentCollectionStore from "./stores/document-collection";
import DocumentStore from "./stores/document";
import DocumentCollectionActions from "./actions/document-collection";
import DocumentActions from "./actions/document";

const Main = {

  init () {
    let context = {
      documentCollectionStore: new DocumentCollectionStore(),
      documentStore: new DocumentStore(),
      documentCollectionActions: new DocumentCollectionActions(),
      documentActions: new DocumentActions()
    };

    new KeyboardShortcuts();
    this.renderApp(context);
  },

  renderApp (context) {
    React.render(<App context={context} />, document.getElementById("root"));
  }

};

Main.init();
