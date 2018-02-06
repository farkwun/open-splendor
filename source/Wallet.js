import React from "react";

class Wallet extends React.Component {
  render() {
    const coins = Object.keys(this.props.coins).map(key => {
      return (
        <div className="counter" style={{ backgroundColor: key }}>
          {this.props.coins[key]}
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
