import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";

const ApplicationActions = function (options = {}) {
  this.init(options);
};

_extend(ApplicationActions.prototype, messenger, {

  channelName: "app",

  messages: {
    menu: "app menu.toggle",
    openFile: "app file.open",
    saveFile: "app file.save"
  },

  init (options = {}) {
    this.configureMessaging({ wiretap: { enable: true } });
  },

  toggleMenu () {
    this.trigger("menu");
  },

  openFile () {
    this.trigger("openFile");
  },

  saveFile () {
    this.trigger("saveFile");
  }

});

export default ApplicationActions;
