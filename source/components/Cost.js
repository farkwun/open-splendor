import React, { Component } from "react";
import PropTypes from "prop-types";

import { addDynamicPalette } from "./DynamicPalette";

class Cost extends Component {
  render() {
    const type = this.props.type;
    const bonus = this.props.bonus;
    const val = Math.max(0, this.props.val - bonus);

    const style = {
      backgroundColor: this.props.palette.colors[type],
      color: "white"
    };

    return bonus ? (
      <div>
        <div className="cost" style={style}>
          {this.props.val}
        </div>
        -&gt;
        <div className="cost" style={{ ...style, color: "#00ff00" }}>
          {val}
        </div>
      </div>
    ) : (
      <div>
        <div className="cost" style={style}>
          {this.props.val}
        </div>
      </div>
    );
  }
}

Cost.propTypes = {
  type: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
  bonus: PropTypes.number
};

export default addDynamicPalette(Cost);
