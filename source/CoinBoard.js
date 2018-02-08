import React from "react";
import PropTypes from "prop-types";

import CoinStack from "./CoinStack";

class CoinBoard extends React.Component {
  render() {
    const stacks = Object.keys(this.props.coins).map(key => {
      return (
        <CoinStack
          key={key}
          type={key}
          amount={this.props.coins[key]}
          addToStash={this.props.addToStash}
        />
      );
    });
    return <div className="coin__board">{stacks}</div>;
  }
}

CoinBoard.propTypes = {
  coins: PropTypes.object,

  addToStash: PropTypes.func
};

export default CoinBoard;
