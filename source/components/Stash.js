import React, { Component } from "react";
import PropTypes from "prop-types";

import Coin from "./Coin";
import { showTutorialOnHover } from "./TutorialHover";

const header = "Stash";
const body = (
  <div>
    The stash is where you can stage coins before taking them for your turn.
    <br />
    <br />
    Click on coins to add them to your stash and click on stashed coins to
    return them to the board.
    <br />
    <br />
    The stash also validates that your selection follows these rules:
    <br />
    <br />
    - You may select either three coins of different colors, or two coins of a
    single color
    <br />
    - You may only select two coins of a single color if there are four or more
    coins of that color available
    <br />
    - You may only take stashed coins if your total coins after taking your
    stash would not exceed the per-player coin limit
    <br />
    <br />
    Take coins for your turn by clicking &quot;Take Stash&quot;.
    <br />
    <br />
    Clear the stash by clicking &quot;Clear Stash&quot;.
  </div>
);

class Stash extends Component {
  render() {
    let coins = this.props.stash.map((coin, index) => (
      <div
        key={index}
        onClick={() => {
          this.props.removeFromStash(coin.type, index);
        }}
      >
        <Coin type={coin.type} />
      </div>
    ));

    return (
      <div className="stash">
        {coins.reverse()}
        <div className="stash__buttons">
          <button
            className="take__stash"
            onClick={() => {
              this.props.takeStash();
            }}
          >
            Take Stash
          </button>
          <button
            className="clear__stash"
            onClick={() => {
              this.props.clearStash(this.props.stash);
            }}
          >
            Clear Stash
          </button>
        </div>
      </div>
    );
  }
}

Stash.propTypes = {
  stash: PropTypes.array.isRequired,

  removeFromStash: PropTypes.func.isRequired,
  takeStash: PropTypes.func.isRequired,
  clearStash: PropTypes.func.isRequired
};

export default showTutorialOnHover(header, body)(Stash);
