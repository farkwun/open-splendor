import React from "react";

import CoinStack from "./CoinStack";

class CoinBoard extends React.Component {
  render() {
    var stacks = Object.keys(this.props.coins).map(key => {
      return (
        <CoinStack
          type={key}
          amount={this.props.coins[key]}
          addToStash={this.props.addToStash}
        />
      );
    });
    return <div className="coin__board">{stacks}</div>;
  }
}

export default CoinBoard;
