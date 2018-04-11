import React, { Component } from "react";
import PropTypes from "prop-types";

import CoinStack from "./CoinStack";
import { showTutorialOnHover } from "./TutorialHover";

const BLACK = "black";
const WHITE = "white";
const BLUE = "blue";
const GREEN = "green";
const RED = "red";
const YELLOW = "yellow";

const header = "Coin Board";
const body = (
  <div>
    Click on coin stacks on the coin board to add them to your stash.
    <br />
    <br />
    The number at the bottom of each stack of coins indicates the number of
    coins remaining in the stack.
    <br />
    <br />
    You are unable to directly add yellow joker tokens to the stash. Joker
    tokens can only be obtained by reserving cards. Yellow joker tokens can be
    used as if they were coins of any color.
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
        {this.coinStack(this.props.coins)(YELLOW)}
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
