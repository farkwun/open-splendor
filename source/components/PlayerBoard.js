import React, { Component } from "react";
import PropTypes from "prop-types";

import PlayerCard from "./PlayerCard";
import { cards, PLAYER_COLORS } from "../data/static";

class PlayerBoard extends Component {
  render() {
    const players = this.props.playOrder.map((playerId, idx) => {
      return (
        <PlayerCard
          key={playerId}
          color={PLAYER_COLORS[idx]}
          player={this.props.players[playerId]}
        />
      );
    });
    return <div className="player__board">{players}</div>;
  }
}

PlayerBoard.propTypes = {
  playOrder: PropTypes.array.isRequired,

  players: PropTypes.object.isRequired
};

export default PlayerBoard;
