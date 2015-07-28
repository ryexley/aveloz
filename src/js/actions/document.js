import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";

const DocumentActions = function (options = {}) {
  this.init(options);
};

_extend(DocumentActions.prototype, messenger, {

  channel: "Document",

  init (options = {}) {
    console.log("DocumentActions:init");
  }

});

export default DocumentActions;
