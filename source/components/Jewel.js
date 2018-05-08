import React, { Component } from "react";
import PropTypes from "prop-types";

import { addDynamicPalette } from "./DynamicPalette";

class Jewel extends Component {
  render() {
    return (
      <div
        className="jewel"
        style={{ backgroundColor: this.props.palette.colors[this.props.color] }}
      />
    );
  }
}

export default addDynamicPalette(Jewel);
