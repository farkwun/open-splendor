import React, { Component } from "react";
import PropTypes from "prop-types";

class Info extends Component {
  render() {
    const currentPlayerPrompt =
      "The current player is [" + this.props.currPlayer.id + "]";
    const roundPrompt = "It is currently Round " + this.props.roundNum;
    return (
      <div className="info" onClick={this.props.incrementIndex}>
        <div>{currentPlayerPrompt}</div>
        <div>{roundPrompt}</div>
      </div>
    );
  }
}

Info.propTypes = {
  roundNum: PropTypes.number.isRequired,

  currPlayer: PropTypes.object.isRequired,

  incrementIndex: PropTypes.func
};

export default Info;
