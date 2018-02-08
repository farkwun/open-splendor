import React from "react";

import Coin from "./Coin";

import { range } from "./Helpers";

class CoinStack extends React.Component {
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
export default CoinStack;
