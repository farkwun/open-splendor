import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NobleList from "./NobleList";
import LevelBoard from "./LevelBoard";
import CoinBoard from "./CoinBoard";
import Stash from "./Stash";
import PlayerBoard from "./PlayerBoard";
import Info from "./Info";
import Winner from "./Winner";

import { canTakeStash } from "../helpers/Helpers";

import {
  addCoinToStash,
  removeCoinFromStash,
  resetStash,
  takeCoinsFromStash,
  buyCard
} from "../redux/modules/shared";

import { setPlayIndex } from "../redux/modules/playIndex";
import { setRoundNum } from "../redux/modules/roundNum";
import { toast } from "../redux/modules/toast";

import { cards } from "../data/static";

class GameBoard extends Component {
  getCurrPlayer = () =>
    this.props.players[this.props.playOrder[this.props.playIndex]];

  getBonus = type =>
    this.getCurrPlayer().cards.filter(cardId => cards[cardId].type === type)
      .length;

  ifActive = func =>
    this.active() ? func : this.props.setToast("It isn't your turn!", 1000);

  active = () => this.props.me === this.props.playOrder[this.props.playIndex];

  addToStash = type => {
    if (this.props.coins[type] > 0 && this.props.stash.length < 3) {
      this.props.addToStash(type);
    }
  };

  takeStash = () => {
    if (canTakeStash(this.props.players[this.props.me], this.props.stash)) {
      this.props.takeStash(this.props.stash);
    } else {
      this.props.setToast("Can't take stash.")();
    }
  };

  incrementPlayIndex = () => {
    let index = this.props.playIndex + 1;
    let roundNum = this.props.roundNum;

    if (index >= this.props.playOrder.length) {
      index = 0;
      roundNum = roundNum + 1;
    }

    this.props.setCurrPlayer(index);
    this.props.setRound(roundNum);
  };

  render() {
    const player = this.getCurrPlayer();

    return this.props.winner ? (
      <Winner winner={this.props.winner} players={this.props.players} />
    ) : (
      <div className="game__board">
        <NobleList nobleList={this.props.nobleList} />
        <LevelBoard
          levels={this.props.levels}
          buyCard={this.ifActive(this.props.buyCardFor)}
          getBonus={this.getBonus}
          currPlayer={player}
        />
        <CoinBoard
          coins={this.props.coins}
          addToStash={this.ifActive(this.addToStash)}
        />
        <Stash
          stash={this.props.stash}
          currPlayer={player}
          removeFromStash={this.ifActive(this.props.removeFromStash)}
          takeStash={this.ifActive(this.takeStash)}
          clearStash={this.ifActive(this.props.clearStash)}
        />
        <PlayerBoard
          playOrder={this.props.playOrder}
          players={this.props.players}
        />
        <Info
          currPlayer={player}
          roundNum={this.props.roundNum}
          incrementIndex={this.incrementIndex}
        />
      </div>
    );
  }
}

GameBoard.propTypes = {
  me: PropTypes.string.isRequired,
  winner: PropTypes.string,

  playIndex: PropTypes.number.isRequired,
  roundNum: PropTypes.number.isRequired,
  nobleList: PropTypes.array.isRequired,
  levels: PropTypes.array.isRequired,
  stash: PropTypes.array.isRequired,
  playOrder: PropTypes.array.isRequired,

  players: PropTypes.object.isRequired,
  coins: PropTypes.object.isRequired,

  buyCardFor: PropTypes.func.isRequired,
  addToStash: PropTypes.func.isRequired,
  takeStash: PropTypes.func.isRequired,
  setCurrPlayer: PropTypes.func.isRequired,
  setRound: PropTypes.func.isRequired,
  removeFromStash: PropTypes.func.isRequired,
  clearStash: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    me: state.me,
    nobleList: state.nobleList,
    levels: state.levels,
    coins: state.coins,
    roundNum: state.roundNum,
    stash: state.stash,
    playOrder: state.playOrder,
    playIndex: state.playIndex,
    players: state.players,
    winner: state.winner
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToStash: type => {
      dispatch(addCoinToStash(type));
    },
    removeFromStash: (type, index) => {
      dispatch(removeCoinFromStash(type, index));
    },
    clearStash: stash => {
      dispatch(resetStash(stash));
    },
    takeStash: stash => {
      dispatch(takeCoinsFromStash(stash));
    },
    setCurrPlayer: index => {
      dispatch(setPlayIndex(index));
    },
    setRound: num => {
      dispatch(setRoundNum(num));
    },
    buyCardFor: card => {
      dispatch(buyCard(card));
    },
    setToast: (text, ms) => () => {
      dispatch(toast(text, ms));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
