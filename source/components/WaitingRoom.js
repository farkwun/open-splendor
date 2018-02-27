import React, { Component } from "react";

import PlayerList from "./PlayerList";

class WaitingRoom extends Component {
  render() {
    return (
      <div className="waiting__room">
        <h4>Waiting for players...</h4>
        <hr />
        <h5>Room ID: {this.props.roomId}</h5>
        <PlayerList playerIds={this.props.players} />
      </div>
    );
  }
}

export default WaitingRoom;
