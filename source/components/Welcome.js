import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewGameForm from "./NewGameForm";
import JoinGameForm from "./JoinGameForm";
import Game from "./Game";

import {
  MAIN,
  NEW_GAME,
  JOIN_GAME,
  PLAY,
  changeMode
} from "../redux/modules/mode";

import { LOADING, startLoad, stopLoad } from "../redux/modules/loading";

import { getNewGame, joinGame } from "../redux/modules/shared";

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
            submit={this.props.joinExisting}
            back={this.props.moveModeTo(MAIN)}
          />
        );
      case PLAY:
        return <Game />;
      default:
        return (
          <div className="welcome">
            <div className="centered">
              <button
                className="button"
                onClick={this.props.moveModeTo(NEW_GAME)}
              >
                New Game
              </button>
              <button
                className="button"
                onClick={this.props.moveModeTo(JOIN_GAME)}
              >
                Join Game
              </button>
            </div>
          </div>
        );
    }
  };
  render() {
    return (
      <div className="welcome">
        <h2 className="centered">Welcome to Splendor</h2>
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
    mode: state.mode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    joinExisting: (name, roomId) => () => {
      dispatch(joinGame(name, roomId));
    },
    createGame: name => () => {
      dispatch(getNewGame(name));
    },
    moveModeTo: mode => () => {
      dispatch(changeMode(mode));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
