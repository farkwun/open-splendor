import React from "react";

import Level from "./Level";

class LevelBoard extends React.Component {
  render() {
    var levels = this.props.levels.map(level => {
      return (
        <Level
          id={level.id}
          buyCard={this.props.buyCard}
          cards={this.props.cards}
          rowCards={level.rowCards}
          currPlayer={this.props.currPlayer}
          getBonus={this.props.getBonus}
        />
      );
    });
    return <div className="level__board">{levels}</div>;
  }
}

export default LevelBoard;
