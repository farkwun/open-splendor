import React, { Component } from "react";
import PropTypes from "prop-types";

import Coin from "./Coin";

import { canTakeStash } from "./Helpers";

class Stash extends Component {
  render() {
    let coins = this.props.stash.map((coin, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            this.props.removeFromStash(index);
          }}
        >
          <Coin type={coin.type} />
        </div>
      );
    });

    return (
      <div className="stash">
        {coins.reverse()}
        <button
          className="take__stash"
          onClick={() => {
            if (canTakeStash(this.props.currPlayer, this.props.stash)) {
              this.props.takeStash();
              this.props.clearStash(false);
            }
          }}
        >
          Take Stash
        </button>
        <button
          className="clear__stash"
          onClick={() => {
            this.props.clearStash(true);
          }}
        >
          Clear Stash
        </button>
      </div>
    );
  }
}

Stash.propTypes = {
  stash: PropTypes.array.isRequired,

  currPlayer: PropTypes.object.isRequired,

  removeFromStash: PropTypes.func.isRequired,
  takeStash: PropTypes.func.isRequired,
  clearStash: PropTypes.func.isRequired
};

export default Stash;
