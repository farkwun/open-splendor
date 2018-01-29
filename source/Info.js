import React from 'react';

class Info extends React.Component {
  render() {
    let current_player_prompt = "The current player is [" + this.props.state.current_player + "]";
    let round_prompt = "It is currently Round " + this.props.state.round_num;
    return (
      <div className="info">
        <div>{current_player_prompt}</div>
        <div>{round_prompt}</div>
      </div>
    );
  }
}

export default Info;
