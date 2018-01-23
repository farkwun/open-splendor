import React from 'react';

import NobleList from './NobleList';
import LevelBoard from './LevelBoard';
import CoinBoard from './CoinBoard';
import PlayerList from './PlayerList';

class GameBoard extends React.Component {
  render() {
    return (
      <div className="game__board">
        <NobleList nobles={this.props.nobles}/>
        <LevelBoard levels={this.props.levels}/>
        <CoinBoard coins={this.props.coins}/>
        {/* <LevelBoard decks={}/>
        <CoinBoard coins={}/>
        <PlayerList players={}/>*/}
      </div>
    );
  }
}

export default GameBoard;
