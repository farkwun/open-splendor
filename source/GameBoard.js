import React from 'react';

import NobleList from './NobleList';
import LevelBoard from './LevelBoard';
import CoinBoard from './CoinBoard';
import PlayerBoard from './PlayerBoard';

class GameBoard extends React.Component {
  render() {
    return (
      <div className="game__board">
        <NobleList nobles={this.props.nobles}/>
        <LevelBoard levels={this.props.levels} getBonus={this.props.getBonus}/>
        <CoinBoard coins={this.props.coins}/>
        <PlayerBoard players={this.props.players}/>
        {/* <LevelBoard decks={}/>
        <CoinBoard coins={}/>
        <PlayerBoard players={}/>*/}
      </div>
    );
  }
}

export default GameBoard;
