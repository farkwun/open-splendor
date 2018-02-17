import React, { Component } from "react";

class JoinGameForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter room ID" />
        <input type="text" placeholder="Enter name" />
        <input type="submit" value="Join Game" />
        <button onClick={this.props.back}>Back</button>
      </form>
    );
  }
}

export default JoinGameForm;
