import React, { Component } from "react";
import PropTypes from "prop-types";

import CoinStack from "./CoinStack";

const BLACK = "black";
const WHITE = "white";
const BLUE = "blue";
const GREEN = "green";
const RED = "red";

class CoinBoard extends Component {
  coinStack = (coins, func) => type => (
    <CoinStack key={type} type={type} amount={coins[type]} addToStash={func} />
  );
  render() {
    const addToStash = this.coinStack(this.props.coins, this.props.addToStash);
    return (
      <div className="coin__board">
        {addToStash(BLACK)}
        {addToStash(WHITE)}
        {addToStash(BLUE)}
        {addToStash(GREEN)}
        {addToStash(RED)}
      </div>
    );
  }
}

CoinBoard.propTypes = {
  coins: PropTypes.object,

  addToStash: PropTypes.func
};

export default CoinBoard;
