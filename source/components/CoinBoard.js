import React, { Component } from "react";
import PropTypes from "prop-types";

import CoinStack from "./CoinStack";
import { showTutorialOnHover } from "./TutorialHover";

const BLACK = "black";
const WHITE = "white";
const BLUE = "blue";
const GREEN = "green";
const RED = "red";

const header = "Coin Board";
const body = (
  <div>
    Click on coin stacks on the coin board to add them to your stash.
    <br />
    <br />
    The number at the bottom of each stack of coins indicates the number of
    coins remaining in the stack.
  </div>
);

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

export default showTutorialOnHover(header, body)(CoinBoard);
