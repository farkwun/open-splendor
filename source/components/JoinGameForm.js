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
      <div className="join__game__form centered">
        <div className="form__input">
          <input
            type="text"
            placeholder="Enter room ID"
            value={this.state.roomId}
            onChange={this.changeRoomId}
            maxLength="10"
          />
        </div>
        <div className="form__input">
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.changeName}
            maxLength="10"
          />
        </div>
        <div>
          <button
            className="button"
            disabled={!this.state.roomId || !this.state.name}
            onClick={this.props.submit(this.state.name, this.state.roomId)}
          >
            Join Game
          </button>
          <button className="button" onClick={this.props.back}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default JoinGameForm;
