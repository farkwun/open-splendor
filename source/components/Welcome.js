import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewGameForm from "./NewGameForm";
import JoinGameForm from "./JoinGameForm";

import {
  MAIN,
  NEW_GAME,
  JOIN_GAME,
  changeMode
} from "../redux/modules/welcome";

class Welcome extends Component {
  renderMode = () => {
    switch (this.props.mode) {
      case NEW_GAME:
        return (
          <NewGameForm
            submit={this.props.createGame}
            back={this.props.moveModeTo(MAIN)}
          />
        );
      case JOIN_GAME:
        return (
          <JoinGameForm
            submit={this.props.joinGame}
            back={this.props.moveModeTo(MAIN)}
          />
        );
      default:
        return (
          <div className="welcome">
            <button onClick={this.props.moveModeTo(NEW_GAME)}>New Game</button>
            <button onClick={this.props.moveModeTo(JOIN_GAME)}>
              Join Game
            </button>
          </div>
        );
    }
  };
  render() {
    return (
      <div className="welcome">
        <h2>Welcome to Splendor</h2>
        <hr />
        {this.renderMode()}
      </div>
    );
  }
}

Welcome.propTypes = {
  mode: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    mode: state.welcome
  };
}

function mapDispatchToProps(dispatch) {
  return {
    joinGame: name => () => {
      console.log(name);
    },
    createGame: name => () => {
      console.log(name);
    },
    moveModeTo: mode => () => {
      dispatch(changeMode(mode));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
