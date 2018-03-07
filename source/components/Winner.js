import React, { Component } from "react";

class Winner extends Component {
  render() {
    const players = Object.keys(this.props.players).map(id => (
      <h4>
        {id} : {this.props.players[id].prestige} prestige |
        {this.props.players[id].cards.length} cards
      </h4>
    ));
    return (
      <div className="winner">
        <h2>Game Over!</h2>
        <h3>
          {this.props.winner} has won the game with
          {this.props.players[this.props.winner].prestige} prestige and
          {this.props.players[this.props.winner].cards.length} development
          cards!
        </h3>
        <hr />
        {players}}
      </div>
    );
  }
}

export default Winner;
