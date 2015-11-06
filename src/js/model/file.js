import fs from "fs";
import { assign as _extend, debounce as _debounce } from "lodash";
import uuid from "uuid";
import Remarkable from "Remarkable";
import messenger from "sumac/dist/messenger";

const md = new Remarkable();

const File = function (filepath) {
  this.configureMessaging({ wiretap: { enable: true } });
  this.path = filepath;
  this.open();
};

_extend(File.prototype, messenger, {

  channelName: "Document",

  messages: {
    ready: "Document file.ready",
    previewChanged: "Document preview.changed"
  },

  open () {
    fs.readFile(this.path, "utf-8", (err, contents, next) => {
      if (err) {
        return next(err);
      }

      this.id = uuid.v4();
      this.source = contents;
      this.subscribeToSourceUpdates();
      this.parse();
    });
  },

  subscribeToSourceUpdates () {
    this.subscribe(`${this.id}.source.changed`, this.onSourceChanged);
  },

  onSourceChanged (data, env) {
    this.source = data.updatedSource;
    _debounce(() => { this.parseSource(); }, 100)();
  },

  parseSource () {
    var html = md.render(this.source);
    this.trigger("previewChanged", { updatedHtml: html });
  },

  parse () {
    var html = md.render(this.source);
    this.html = html;
    this.trigger("ready", {
      document: {
        id: this.id,
        path: this.path,
        source: this.source,
        html: this.html
      }
    });
  },

  save (next) {
    fs.writeFile(this.path, this.source, (err) => {
      if (err) {
        return next(err);
      }

      next(null);
    });
  }

});

export default File;
