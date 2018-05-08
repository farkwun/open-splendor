import React, { Component } from "react";
import PropTypes from "prop-types";

import { PALETTE } from "../data/static.js";

class Jewel extends Component {
  render() {
    return (
      <div
        className="jewel"
        style={{ backgroundColor: PALETTE["colorblind"][this.props.color] }}
      />
    );
  }
}

export default Jewel;
