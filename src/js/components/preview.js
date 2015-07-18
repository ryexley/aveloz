import React, { Component } from "react";

let Preview = React.createClass({

  render () {
    return (
      <section className="preview" dangerouslySetInnerHTML={{__html: this.props.html}}>
      </section>
    );
  }

});

export default Preview;
