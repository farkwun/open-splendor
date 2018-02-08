import React from "react";
import PropTypes from "prop-types";

class Wallet extends React.Component {
  render() {
    const coins = Object.keys(this.props.coins).map(key => {
      return (
        <div key={key} className="counter" style={{ backgroundColor: key }}>
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

Wallet.propTypes = {
  coins: PropTypes.object.isRequired
};

export default Wallet;
