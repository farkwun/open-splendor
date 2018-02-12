import React, { Component } from "react";
import PropTypes from "prop-types";

import Level from "./Level";

class LevelBoard extends Component {
  render() {
    var levels = this.props.levels.map(level => {
      return (
        <Level
          id={level.id}
          key={level.id}
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

LevelBoard.propTypes = {
  levels: PropTypes.array.isRequired,

  cards: PropTypes.object.isRequired,
  currPlayer: PropTypes.object.isRequired,

  buyCard: PropTypes.func.isRequired,
  getBonus: PropTypes.func.isRequired
};
export default LevelBoard;
