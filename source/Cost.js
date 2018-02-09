import React, { Component } from "react";
import PropTypes from "prop-types";

class Cost extends Component {
  render() {
    // TODO: Refactor
    let type = this.props.type;
    let val = this.props.val;
    let bonus = 0;

    let style = {
      backgroundColor: type
    };

    if (this.props.getBonus) {
      bonus = this.props.getBonus(type);
    }

    style.color = "white";
    if (bonus) {
      style.color = "#00ff00";
    }

    val = Math.max(0, val - bonus);

    return (
      <div className="cost" style={style}>
        {val}
      </div>
    );
  }
}

Cost.propTypes = {
  type: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,

  getBonus: PropTypes.func
};

export default Cost;
