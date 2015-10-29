import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";

const DocumentCollectionActions = function (options = {}) {
  this.init(options);
};

_extend(DocumentCollectionActions.prototype, messenger, {

  channelName: "DocumentCollection",

  init (options = {}) {
  }

});

export default DocumentCollectionActions;
