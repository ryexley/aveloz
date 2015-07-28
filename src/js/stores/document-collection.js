import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";
import File from "../model/file";

const DocumentCollectionStore = function (options = {}) {
  this.init(options);
}

_extend(DocumentCollectionStore.prototype, messenger, {

  channel: "DocumentCollection",

  messages: {
    ready: "DocumentCollection document.collection.store.ready"
  },

  init (options = {}) {
    this.name = options.name || "default";
    this.configureMessaging({ wiretap: { enable: true } });
    this.trigger("ready", { name: this.name });
  }

});

export default DocumentCollectionStore;
