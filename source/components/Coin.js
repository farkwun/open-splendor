import React, { Component } from "react";
import PropTypes from "prop-types";

import { addDynamicPalette } from "./DynamicPalette";

class Coin extends Component {
  render() {
    return (
      <div
        className="coin"
        style={{ backgroundColor: this.props.palette.colors[this.props.type] }}
      >
        <div className="coin_inner" style={{ backgroundColor: "white" }} />
      </div>
    );
  }
}

Coin.propTypes = {
  type: PropTypes.string.isRequired
};

export default addDynamicPalette(Coin);
