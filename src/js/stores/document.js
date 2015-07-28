import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";

const DocumentStore = function (options = {}) {
  this.init(options);
}

_extend(DocumentStore.prototype, messenger, {

  channel: "Document",

  messages: {
    ready: "Document document.store.ready"
  },

  init (options = {}) {
    this.configureMessaging({ wiretap: { enable: true } });
    this.trigger("ready");
  }

});

export default DocumentStore;
