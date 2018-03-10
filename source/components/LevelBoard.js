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
export default LevelBoard;
