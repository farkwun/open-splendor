import React from 'react';

import Coin from './Coin';

class CoinStack extends React.Component {
  render() {
    var type = this.props.coin.type;
    var null_arr = new Array(this.props.coin.amount).fill(0);
    var coins = null_arr.map(() => {
      return <Coin type={type}/>
    });

    return (
      <div className="coin__stack">
        <div className="groove">
          {coins}
        </div>
      </div>
    );
  }
}
export default CoinStack;
