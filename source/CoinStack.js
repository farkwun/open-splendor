import React from "react";

import Coin from "./Coin";

class CoinStack extends React.Component {
  render() {
    var null_arr = new Array(Math.max(this.props.amount, 0)).fill(0);
    var coins = null_arr.map(() => {
      return <Coin type={this.props.type} />;
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
export default CoinStack;
