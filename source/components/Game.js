import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GameBoard from "./GameBoard";
import WaitingRoom from "./WaitingRoom";

class Game extends Component {
  renderMode = () => {
    if (this.props.active) {
      return <GameBoard />;
    }
    return (
      <WaitingRoom
        roomId={this.props.roomId}
        players={Object.keys(this.props.players)}
      />
    );
  };
  render() {
    return <div className="game">{this.renderMode()}</div>;
  }
}

Game.propTypes = {};

function mapStateToProps(state) {
  return {
    active: state.active,
    roomId: state.roomId,
    players: state.players
  };
}

export default connect(mapStateToProps)(Game);
