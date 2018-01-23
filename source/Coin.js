import React from 'react';

class Coin extends React.Component {
  render() {
    return (
      <div className="coin" style={{backgroundColor: this.props.type}}>
        <div className="coin_inner" style={{backgroundColor: "white"}}>
        </div>
      </div>
    );
  }
}

export default Coin;
