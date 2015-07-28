import he from "he";

const util = {

  encode (target) {
    return he.encode(target);
  },

  decode (target) {
    return he.decode(target);
  }

};

export default util;
