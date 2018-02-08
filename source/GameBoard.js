import React from "react";
import PropTypes from "prop-types";

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

GameBoard.propTypes = {
  nobleList: PropTypes.array.isRequired,
  levels: PropTypes.array.isRequired,
  stash: PropTypes.array.isRequired,
  playOrder: PropTypes.array.isRequired,

  players: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
  nobles: PropTypes.object.isRequired,
  coins: PropTypes.object.isRequired,
  currPlayer: PropTypes.object.isRequired,

  buyCard: PropTypes.func.isRequired,
  getBonus: PropTypes.func.isRequired,
  addToStash: PropTypes.func.isRequired,
  removeFromStash: PropTypes.func.isRequired,
  takeStash: PropTypes.func.isRequired,
  clearStash: PropTypes.func.isRequired
};

export default GameBoard;
