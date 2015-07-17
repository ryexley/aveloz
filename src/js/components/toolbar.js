import React, { Component } from "react";

let Toolbar = React.createClass({

  render () {
    return (
      <nav className="toolbar">
        <ul>
          <li><a href="#">&#9776;</a></li>
        </ul>
      </nav>
    );
  }

});

export default Toolbar;
