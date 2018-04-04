import React, { Component } from "react";
import PropTypes from "prop-types";

import Level from "./Level";
import { showTutorialOnHover } from "./TutorialHover";

const header = "Levels";
const body = (
  <div>
    Each row of the board is called a Level.
    <br />
    <br />
    Each Level contains development cards that correspond to it.
    <br />
    <br />
    The top Level contains the most expensive, valuable cards, the middle Level
    contains cards of middling value and expense, and the bottom Level contains
    the cheapest and least Prestigious cards.
  </div>
);

class LevelBoard extends Component {
  render() {
    var levels = this.props.levels.map(level => {
      return (
        <Level
          id={level.id}
          key={level.id}
          buyCard={this.props.buyCard}
          rowCards={level.rowCards}
          me={this.props.me}
          getBonus={this.props.getBonus}
        />
      );
    });
    return <div className="level__board">{levels}</div>;
  }
}

LevelBoard.propTypes = {
  levels: PropTypes.array.isRequired,

  me: PropTypes.object.isRequired,

  buyCard: PropTypes.func.isRequired,
  getBonus: PropTypes.func.isRequired
};

export default showTutorialOnHover(header, body)(LevelBoard);
