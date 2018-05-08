import React, { Component } from "react";
import PropTypes from "prop-types";

import { addDynamicPalette } from "./DynamicPalette";

class NobleCost extends Component {
  render() {
    const type = this.props.type;

    const style = {
      backgroundColor: this.props.palette.colors[type],
      color: "white"
    };

    return (
      <div>
        <div className="cost" style={style}>
          {this.props.val}
        </div>
      </div>
    );
  }
}

NobleCost.propTypes = {
  type: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired
};

export default addDynamicPalette(NobleCost);
