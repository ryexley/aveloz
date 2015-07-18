import path from "path";
import fs from "fs";
import { assign as _extend } from "lodash";

const File = function (filepath) {
  this.path = filepath;
};

_extend(File.prototype, {

  open (next) {
    fs.readFile(this.path, "utf-8", next);
  }

});

export default File;
