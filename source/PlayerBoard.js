import React, { Component } from "react";
import PropTypes from "prop-types";

import PlayerCard from "./PlayerCard";

class PlayerBoard extends Component {
  render() {
    const players = this.props.playOrder.map(playerId => {
      return (
        <PlayerCard
          key={playerId}
          cards={this.props.cards}
          nobles={this.props.nobles}
          player={this.props.players[playerId]}
        />
      );
    });
    return <div className="player__board">{players}</div>;
  }
}

PlayerBoard.propTypes = {
  playOrder: PropTypes.array.isRequired,

  cards: PropTypes.object.isRequired,
  nobles: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired
};

export default PlayerBoard;
