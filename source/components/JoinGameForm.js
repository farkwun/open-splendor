import React, { Component } from "react";

class JoinGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: "",
      name: ""
    };
  }

  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeRoomId = event => {
    this.setState({ roomId: event.target.value });
  };

  render() {
    return (
      <div className="join__game__form">
        <input
          type="text"
          placeholder="Enter room ID"
          value={this.state.roomId}
          onChange={this.changeRoomId}
        />
        <input
          type="text"
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.changeName}
        />
        <button
          onClick={this.props.submit({
            roomId: this.state.roomId,
            name: this.state.name
          })}
        >
          Join Game
        </button>
        <button onClick={this.props.back}>Back</button>
      </div>
    );
  }
}

export default JoinGameForm;
