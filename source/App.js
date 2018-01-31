import React from 'react';

import GameBoard from './GameBoard';
import Info from './Info';

import * as mock from './MockData';
import * as helpers from './Helpers';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nobles: mock.nobles,
      levels: mock.levels,
      coins: mock.coins,
      round_num: mock.round_num,
      stash: [
      ],
      play_order: mock.play_order,
      play_index: mock.play_index,
      players: mock.players
    };
  }

  getBonus = (type) => {
    let curr_player = this.state.play_order[this.state.play_index];
    return this.state.players[curr_player].cards.filter((c) => {
      return (c.type === type);
    }).length;
  };

  removeFromStash = (index) => {
    let stash = [...this.state.stash];
    let [coin] = stash.splice(index, 1);
    let coins = helpers.addCoinAmount(this.state.coins, coin.type, 1);
    this.setState({
      stash,
      coins
    });
  };

  addToStash = (type) => {
    let stack = this.state.coins.find((coin) => coin.type === type);
    if (stack.amount == 0 || this.state.stash.length >= 3){
      return;
    }
    let stash = [...this.state.stash, {type}];
    let coins = helpers.addCoinAmount(this.state.coins, type, -1);

    this.setState({
      stash,
      coins
    });
  }

  incrementPlayIndex = () => {
    let index = this.state.play_index + 1;
    let round_num = this.state.round_num;

    if (index >= this.state.play_order.length){
      index = 0;
      round_num = round_num + 1;
    }

    this.setState({
      play_index: index,
      round_num: round_num
    });
  }

  render () {
    let players = this.state.play_order.map((player_id) => {
      return this.state.players[player_id];
    });

    return (
      <div className="app">
        <GameBoard nobles={this.state.nobles}
          levels={this.state.levels}
          coins={this.state.coins}
          stash={this.state.stash}
          players={players}
          getBonus={this.getBonus}
          removeFromStash={this.removeFromStash}
          addToStash={this.addToStash}
        />
        <Info state={this.state} onClick={this.incrementPlayIndex}/>
    </div>)
  }
}

React.render(<App />, document.getElementById('root'));
