import messenger from "sumac/dist/messenger";
import { assign as _extend } from "lodash";

const KeyboardShortcuts = function () {
  this.init();
}

_extend(KeyboardShortcuts.prototype, messenger, {

  boundKeyCodes: [83, 79],

  keyCharMap: {
    79: "o",
    83: "s"
  },

  handlerMap: {
    ["Meta+o"]: "open",
    ["Meta+s"]: "save"
  },

  messages: {
    openFile: "app file.open",
    saveFile: "app file.save"
  },

  init () {
    this.configureMessaging({ wiretap: { enable: true } });
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  },

  handleKeyDown (e) {
    const boundKeyIndex = this.boundKeyCodes.indexOf(e.keyCode);
    const isBoundKeyCode = (boundKeyIndex > -1);

    if (isBoundKeyCode && e.metaKey) {
      const characterKey = this.keyCharMap[e.keyCode];
      const handlerKey = `Meta+${characterKey}`;
      const handler = this[this.handlerMap[handlerKey]].bind(this);

      if (handler && typeof handler === "function") {
        handler();
      }
    }
  },

  open () {
    this.trigger("openFile");
  },

  save () {
    this.trigger("saveFile");
  }

});

export default KeyboardShortcuts;
