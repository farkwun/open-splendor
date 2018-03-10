import React, { Component } from "react";
import PropTypes from "prop-types";

import Coin from "./Coin";

import { canTakeStash } from "../helpers/Helpers";

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
    );
  }
}

Stash.propTypes = {
  stash: PropTypes.array.isRequired,

  removeFromStash: PropTypes.func.isRequired,
  takeStash: PropTypes.func.isRequired,
  clearStash: PropTypes.func.isRequired
};

export default Stash;
