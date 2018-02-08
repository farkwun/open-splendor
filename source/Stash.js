import React from "react";

import Coin from "./Coin";

import * as helpers from "./Helpers";

class Stash extends React.Component {
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
            if (helpers.canTakeStash(this.props.currPlayer, this.props.stash)) {
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

export default Stash;
