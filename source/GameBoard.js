import React from "react";

import NobleList from "./NobleList";
import LevelBoard from "./LevelBoard";
import CoinBoard from "./CoinBoard";
import Stash from "./Stash";
import PlayerBoard from "./PlayerBoard";

class GameBoard extends React.Component {
  render() {
    return (
      <div className="game__board">
        <NobleList
          nobleList={this.props.nobleList}
          nobles={this.props.nobles}
        />
        <LevelBoard
          levels={this.props.levels}
          cards={this.props.cards}
          buyCard={this.props.buyCard}
          getBonus={this.props.getBonus}
          currPlayer={this.props.currPlayer}
        />
        <CoinBoard
          coins={this.props.coins}
          addToStash={this.props.addToStash}
        />
        <Stash
          stash={this.props.stash}
          currPlayer={this.props.currPlayer}
          removeFromStash={this.props.removeFromStash}
          takeStash={this.props.takeStash}
          clearStash={this.props.clearStash}
        />
        <PlayerBoard
          cards={this.props.cards}
          nobles={this.props.nobles}
          playOrder={this.props.playOrder}
          players={this.props.players}
        />
      </div>
    );
  }
}

export default GameBoard;
