import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NewGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  changeValue = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="new__game__form">
        <input
          type="text"
          placeholder="Enter name"
          value={this.state.value}
          onChange={this.changeValue}
        />
        <Link to="/game">
          <button
            disabled={!this.state.value}
            onClick={this.props.submit(this.state.value)}
          >
            Create
          </button>
        </Link>
        <button onClick={this.props.back}>Back</button>
      </div>
    );
  }
}

export default NewGameForm;
