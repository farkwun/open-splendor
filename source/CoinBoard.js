import React from 'react';

import CoinStack from './CoinStack';

class CoinBoard extends React.Component {
  render() {
    var stacks = this.props.coins.map((coin) => {
      return <CoinStack coin={coin}
        addToStash={this.props.addToStash}/>
    });
    return (
      <div className="coin__board">
        {stacks}
      </div>
    );
  }
}

export default CoinBoard;
