import React from 'react';

class Wallet extends React.Component {
  render() {
    let coins = this.props.coins.map((coin) => {
      return (
        <div className="counter" style={{backgroundColor: coin.type}}>
          {coin.amount}
        </div>
      );
    });
    return (
      <div className="wallet">
        <h3 className="box__header">Wallet</h3>
        {coins}
      </div>
    );
  }
}

export default Wallet;
