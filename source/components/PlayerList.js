import React, { Component } from "react";

import PlayerRow from "./PlayerRow";

class PlayerList extends Component {
  render() {
    const rows = this.props.playerIds.map((id, idx) => (
      <PlayerRow key={idx} index={idx + 1} text={id} />
    ));
    return (
      <table className="player__list">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default PlayerList;
