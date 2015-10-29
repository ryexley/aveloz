import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";

const DocumentStore = function (options = {}) {
  this.init(options);
}

_extend(DocumentStore.prototype, messenger, {

  channelName: "Document",

  messages: {
    ready: "Document document.store.ready",
    sourceUpdated: "Document source.updated",
    previewUpdated: "Document preview.updated"
  },

  subscriptions: {
    onSourceChanged: "Document source.changed",
    onPreviewChanged: "Document preview.changed"
  },

  init (options = {}) {
    this.configureMessaging({ wiretap: { enable: true } });
    this.trigger("ready");
  },

  onSourceChanged (data, env) {
    this.trigger("sourceUpdated", data);
  },

  onPreviewChanged (data, env) {
    this.trigger("previewUpdated", data);
  }

});

export default DocumentStore;
