import React, { Component } from "react";
import PropTypes from "prop-types";

import PlayerCard from "./PlayerCard";
import { cards } from "../data/static";

class PlayerBoard extends Component {
  render() {
    const players = this.props.playOrder.map(playerId => {
      return (
        <PlayerCard key={playerId} player={this.props.players[playerId]} />
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
