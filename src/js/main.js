import path from "path";
import React from "react";
import App from "./app";

const Main = {

  renderApp () {
    React.render(<App />, document.getElementById("root"));
  }

};

Main.renderApp();
