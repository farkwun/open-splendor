import React, { Component } from "react";
import PropTypes from "prop-types";

class Coin extends Component {
  render() {
    return (
      <div className="coin" style={{ backgroundColor: this.props.type }}>
        <div className="coin_inner" style={{ backgroundColor: "white" }} />
      </div>
    );
  }
}

Coin.propTypes = {
  type: PropTypes.string.isRequired
};

export default Coin;