import React, { Component } from "react";
import PropTypes from "prop-types";

class Jewel extends Component {
  render() {
    return (
      <div className="jewel" style={{ backgroundColor: this.props.color }} />
    );
  }
}

export default Jewel;
