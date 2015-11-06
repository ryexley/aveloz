import { assign as _extend } from "lodash";
import uuid from "uuid";
import messenger from "sumac/dist/messenger";
import File from "../model/file";

const DocumentCollectionStore = function (options = {}) {
  this.init(options);
}

_extend(DocumentCollectionStore.prototype, messenger, {

  channelName: "DocumentCollection",

  documentCollections: {},

  currentCollection: {},

  messages: {
    ready: "DocumentCollection document.collection.store.ready"
  },

  subscriptions: {
    onRequestFileOpen: "app file.open",
    onRequestFileSave: "app file.save"
  },

  init (options = {}) {
    this.name = options.name || "default";
    this.configureMessaging({ wiretap: { enable: true } });
    this.loadCollections();
    this.setCurrentCollection(Object.keys(this.documentCollections)[0]);
    this.trigger("ready", { name: this.name });
  },

  loadCollections () {
    // TODO: need to eventually load up persisted collections
    this.loadCollection({ name: "default" });
  },

  loadCollection (options = {}) {
    let collection = _extend(options, {
      id: uuid.v4(),
      documents: []
    });

    this.documentCollections[collection.id] = collection;
  },

  setCurrentCollection (id) {
    this.currentCollection = this.documentCollections[id]
  },

  onRequestFileOpen (data, env) {
    if (data.filepath) {
      let file = new File(data.filepath);

      this.currentCollection.documents.push(file);
      this.currentCollection.currentDocument = file;
    }
  },

  onRequestFileSave (data, env) {
    this.currentCollection.currentDocument.save((err) => {
      if (err) {
        console.log("ERROR saving file", err);
        throw err;
      }

      console.log("File saved successfully");
    });
  }

});

export default DocumentCollectionStore;
