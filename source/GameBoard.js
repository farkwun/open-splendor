import React from 'react';

import NobleList from './NobleList';
import DeckList from './DeckList';
import CoinList from './CoinList';
import PlayerList from './PlayerList';

class GameBoard extends React.Component {
  render() {
    return (
      <div className="game__board">
        <NobleList nobles={this.props.nobles}/>
        <DeckList />
        {/* <DeckList decks={}/>
        <CoinList coins={}/>
        <PlayerList players={}/>*/}
      </div>
    );
  }
}

export default GameBoard;
