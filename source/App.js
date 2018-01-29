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
      current_player: mock.current_player,
      round_num: mock.round_num,
      players: mock.players
    };
  }

  render () {
    return (
      <div className="app">
        <GameBoard nobles={this.state.nobles}
          levels={this.state.levels}
          coins={this.state.coins}
          players={this.state.players}
        />
        <Info state={this.state}/>
      </div>)
  }
}

React.render(<App />, document.getElementById('root'));
