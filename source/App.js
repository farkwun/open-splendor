import React from 'react';

import GameBoard from './GameBoard';
import Info from './Info';

import * as mock from './MockData';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nobles: mock.nobles,
      levels: mock.levels,
      coins: mock.coins,
      round_num: mock.round_num,
      play_order: mock.play_order,
      play_index: mock.play_index,
      players: mock.players
    };
  }

  incrementPlayIndex() {
    let index = this.state.play_index + 1;
    if (index >= this.state.play_order.length){
      index = 0;
    }
    this.setState({
      play_index: index
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
          players={players}
          getBonus={this.getBonus}
        />
        <Info state={this.state} onClick={() => {
          this.incrementPlayIndex();
        }}/>
      </div>)
  }

  getBonus = (type) => {
    let curr_player = this.state.play_order[this.state.play_index];
    return this.state.players[curr_player].cards.filter((c) => {
      return (c.type === type);
    }).length;
  }
}

React.render(<App />, document.getElementById('root'));
