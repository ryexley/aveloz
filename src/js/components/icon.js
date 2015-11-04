import React, { Component } from "react";

let Icon = React.createClass({

  render () {
    let className = `fa fa-${this.props.name}`;

    return (
      <i className={className} {...this.props}></i>
    );
  }

});

export default Icon;
