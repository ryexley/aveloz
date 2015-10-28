import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";

const DocumentActions = function (options = {}) {
  this.init(options);
};

_extend(DocumentActions.prototype, messenger, {

  channel: "Document",

  messages: {
    sourceChanged: "Document source.changed"
  },

  init (options = {}) {
    this.configureMessaging({ wiretap: { enable: true } });
  },

  sourceChanged (payload) {
    this.trigger("sourceChanged", payload);
  }

});

export default DocumentActions;
