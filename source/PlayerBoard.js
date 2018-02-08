import React from "react";

import PlayerCard from "./PlayerCard";

class PlayerBoard extends React.Component {
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

export default PlayerBoard;
