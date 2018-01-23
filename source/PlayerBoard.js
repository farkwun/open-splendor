import React from 'react';

import PlayerCard from './PlayerCard';

class PlayerBoard extends React.Component {
  render() {
    var players = this.props.players.map((player) => {
      return <PlayerCard player={player}/>
    });
    return (
      <div className="player__board">
        {players}
      </div>
    );
  }
}

export default PlayerBoard;
