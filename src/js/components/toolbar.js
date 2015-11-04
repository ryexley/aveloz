import React, { Component } from "react";
import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";
import Icon from "./icon";

let Toolbar = React.createClass({

  render () {
    return (
      <nav className="toolbar">
        <ul>
          <li><a href="#"><Icon name="bars" title="Menu" /></a></li>
          <li><a href="#"><Icon name="folder-open-o" title="Open" /></a></li>
          <li><a href="#"><Icon name="download" title="Save" /></a></li>
        </ul>
      </nav>
    );
  }

});

_extend(Toolbar.prototype, messenger, {

  channelName: "app"

});

export default Toolbar;
