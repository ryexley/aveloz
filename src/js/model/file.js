import path from "path";
import fs from "fs";
import { assign as _extend } from "lodash";
import Remarkable from "Remarkable";
import messenger from "sumac/dist/messenger";

const md = new Remarkable();

const File = function (filepath) {
  this.configureMessaging({ wiretap: { enable: true } });
  this.path = filepath;
  this.open();
};

_extend(File.prototype, messenger, {

  channel: "Document",

  messages: {
    ready: "Document file.ready"
  },

  open () {
    fs.readFile(this.path, "utf-8", (err, contents) => {
      if (err) {
        return next(err);
      }

      this.source = contents;
      this.parse();
    });
  },

  parse () {
    var html = md.render(this.source);
    this.html = html;
    this.trigger("ready", {
      document: {
        path: this.path,
        source: this.source,
        html: this.html
      }
    });
  }

});

export default File;
