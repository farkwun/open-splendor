import React, { Component } from "react";
import PropTypes from "prop-types";

import Coin from "./Coin";

import { range } from "./Helpers";

class CoinStack extends Component {
  render() {
    const coins = range(this.props.amount).map(idx => {
      return <Coin key={idx} type={this.props.type} />;
    });

    return (
      <div
        className="coin__stack"
        onClick={() => {
          this.props.addToStash(this.props.type);
        }}
      >
        <div className="groove">{coins}</div>
      </div>
    );
  }
}

CoinStack.propTypes = {
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,

  addToStash: PropTypes.func.isRequired
};

export default CoinStack;
