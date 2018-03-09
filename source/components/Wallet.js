import React, { Component } from "react";
import PropTypes from "prop-types";

import { maxCoins } from "../helpers/Helpers";

class Wallet extends Component {
  render() {
    const coins = Object.keys(this.props.coins).map(key => {
      return (
        <div key={key} className="counter" style={{ backgroundColor: key }}>
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
        <h3 className="box__header">Wallet</h3>
        <div className="reminder__text">
          <i>
            coins - {numCoins}/{maxCoins}
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
