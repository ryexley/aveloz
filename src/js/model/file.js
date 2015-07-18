import path from "path";
import fs from "fs";
import { assign as _extend } from "lodash";
import Remarkable from "Remarkable";

const md = new Remarkable();

const File = function (filepath) {
  this.path = filepath;
  this.open(this.parse.bind(this));
};

_extend(File.prototype, {

  open (next) {
    fs.readFile(this.path, "utf-8", (err, contents) => {
      if (err) {
        return next(err);
      }

      this.source = contents;
      next(null);
    });
  },

  parse () {
    var html = md.render(this.source);
    this.html = html;
  }

});

export default File;
