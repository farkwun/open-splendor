import React from "react";

import PlayerCard from "./PlayerCard";

class PlayerBoard extends React.Component {
  render() {
    const players = this.props.play_order.map(player_id => {
      return (
        <PlayerCard
          cards={this.props.cards}
          player={this.props.players[player_id]}
        />
      );
    });
    return <div className="player__board">{players}</div>;
  }
}

export default PlayerBoard;
