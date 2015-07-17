import path from "path";
import fs from "fs";

const File = {

  open (filepath, next) {
    fs.exists(filepath, (exists) => {
      if (exists) {
        fs.readFile(filepath, "utf-8", next);
      }
    });
  }

};

export default File;
