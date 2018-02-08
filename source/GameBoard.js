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
        <NobleList nobles={this.props.nobles} />
        <LevelBoard
          levels={this.props.levels}
          cards={this.props.cards}
          buyCard={this.props.buyCard}
          getBonus={this.props.getBonus}
          curr_player={this.props.curr_player}
        />
        <CoinBoard
          coins={this.props.coins}
          addToStash={this.props.addToStash}
        />
        <Stash
          stash={this.props.stash}
          curr_player={this.props.curr_player}
          removeFromStash={this.props.removeFromStash}
          takeStash={this.props.takeStash}
          clearStash={this.props.clearStash}
        />
        <PlayerBoard
          cards={this.props.cards}
          play_order={this.props.play_order}
          players={this.props.players}
        />
      </div>
    );
  }
}

export default GameBoard;
