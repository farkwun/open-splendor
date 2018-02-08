import React from "react";

class Info extends React.Component {
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

export default Info;
