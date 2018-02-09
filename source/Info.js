import React, { Component } from "react";
import PropTypes from "prop-types";

class Info extends Component {
  render() {
    let currentPlayer = this.props.state.playOrder[this.props.state.playIndex];
    let currentPlayerPrompt = "The current player is [" + currentPlayer + "]";
    let roundPrompt = "It is currently Round " + this.props.state.roundNum;
    return (
      <div className="info" onClick={this.props.onClick}>
        <div>{currentPlayerPrompt}</div>
        <div>{roundPrompt}</div>
      </div>
    );
  }
}

Info.propTypes = {
  state: PropTypes.object.isRequired,

  onClick: PropTypes.func
};

export default Info;
