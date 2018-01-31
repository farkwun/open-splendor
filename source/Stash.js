import React from 'react';

import Coin from './Coin';

class Stash extends React.Component {
  render() {
    let coins = this.props.stash.map((coin, index) => {
      return (
        <div onClick={() => {this.props.removeFromStash(index)}}>
        <Coin type={coin.type}/>
      </div>
      );
    });

    return (
      <div className="stash">
        {coins.reverse()}
      </div>
    );
  }
}

export default Stash;
