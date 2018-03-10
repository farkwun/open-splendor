import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          maxLength="10"
        />
        <input
          type="text"
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.changeName}
          maxLength="10"
        />
        <Link to="/game">
          <button
            disabled={!this.state.roomId || !this.state.name}
            onClick={this.props.submit(this.state.name, this.state.roomId)}
          >
            Join Game
          </button>
        </Link>
        <button onClick={this.props.back}>Back</button>
      </div>
    );
  }
}

export default JoinGameForm;
