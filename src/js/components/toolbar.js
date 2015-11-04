import React, { Component } from "react";
import { assign as _extend } from "lodash";
import messenger from "sumac/dist/messenger";
import Icon from "./icon";
import ApplicationActions from "../actions/application-actions";

const actions = new ApplicationActions();

let Toolbar = React.createClass({

  render () {
    return (
      <nav className="toolbar">
        <ul>
          <li><a href="#"><Icon name="bars" title="Menu" onClick={this.menu} /></a></li>
          <li><a href="#"><Icon name="folder-open-o" title="Open" onClick={this.openFile} /></a></li>
          <li><a href="#"><Icon name="download" title="Save" onClick={this.saveFile} /></a></li>
        </ul>
      </nav>
    );
  },

  menu () {
    actions.toggleMenu();
  },

  openFile () {
    actions.openFile();
  },

  saveFile () {
    actions.saveFile();
  }

});

_extend(Toolbar.prototype, messenger, {

  channelName: "app"

});

export default Toolbar;
