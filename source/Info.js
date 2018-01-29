import React from 'react';

class Info extends React.Component {
  render() {
    let current_player_prompt = "The current player is [" + this.props.state.current_player + "]";
    return (
      <div className="info">
        {current_player_prompt}
      </div>
    );
  }
}

export default Info;
