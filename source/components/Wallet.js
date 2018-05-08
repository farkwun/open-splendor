import React, { Component } from "react";
import PropTypes from "prop-types";

import { maxCoins } from "../helpers/Helpers";

import { PALETTE } from "../data/static.js";

const WARN_OFFSET = 2;

class Wallet extends Component {
  render() {
    const coins = Object.keys(this.props.coins).map(key => {
      return (
        <div
          key={key}
          className="counter"
          style={{ backgroundColor: PALETTE["colorblind"][key] }}
        >
          {this.props.coins[key]}
        </div>
      );
    });

    const numCoins = Object.keys(this.props.coins).reduce(
      (sum, key) => (sum += this.props.coins[key]),
      0
    );
    return (
      <div className="wallet">
        <div
          className="reminder__text"
          style={
            numCoins < maxCoins - WARN_OFFSET
              ? { color: "black" }
              : { color: "red" }
          }
        >
          <i>
            Coins - {numCoins}/{maxCoins}
          </i>
        </div>
        {coins}
      </div>
    );
  }
}

Wallet.propTypes = {
  coins: PropTypes.object.isRequired
};

export default Wallet;
