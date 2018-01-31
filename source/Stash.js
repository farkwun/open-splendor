import React from 'react';

import Coin from './Coin';

import * as helpers from './Helpers';

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
        <button className="take__stash"
          onClick={() => {
            console.log(helpers.stashIsValid(this.props.stash));
          }}>
          Take Stash
        </button>
        <button className="clear__stash"
          onClick={() => {
            this.props.clearStash();
          }}>
          Clear Stash
        </button>
      </div>
    );
  }
}

export default Stash;
