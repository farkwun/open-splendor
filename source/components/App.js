import React, { Component } from "react";
import { connect } from "react-redux";

import GameBoard from "./GameBoard";
import Info from "./Info";

import {
  addCoinToStash,
  removeCoinFromStash,
  resetStash,
  takeCoinsFromStash,
  buyCard
} from "../redux/modules/shared";

import { setPlayIndex } from "../redux/modules/playIndex";
import { setRoundNum } from "../redux/modules/roundNum";

import { cards } from "../data/static";

class App extends Component {
  getCurrPlayer = () =>
    this.props.players[this.props.playOrder[this.props.playIndex]];

  getBonus = type =>
    this.getCurrPlayer().cards.filter(cardId => cards[cardId].type === type)
      .length;

  buyCard = (cardId, levelId) => {
    this.props.buyCardFor(cardId, this.getCurrPlayer(), levelId);
    this.incrementPlayIndex();
  };

  addToStash = type => {
    if (this.props.coins[type] > 0 && this.props.stash.length < 3) {
      this.props.addToStash(type);
    }
  };

  takeStash = () => {
    const currPlayerId = this.props.playOrder[this.props.playIndex];
    this.props.takeStash(currPlayerId, this.props.stash);
    this.incrementPlayIndex();
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

    return (
      <div className="app">
        <GameBoard
          nobleList={this.props.nobleList}
          levels={this.props.levels}
          coins={this.props.coins}
          stash={this.props.stash}
          players={this.props.players}
          playOrder={this.props.playOrder}
          getBonus={this.getBonus}
          currPlayer={player}
          buyCard={this.buyCard}
          removeFromStash={this.props.removeFromStash}
          addToStash={this.addToStash}
          takeStash={this.takeStash}
          clearStash={this.props.clearStash}
        />
        <Info state={this.props} onClick={this.incrementPlayIndex} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nobleList: state.nobleList,
    levels: state.levels,
    coins: state.coins,
    roundNum: state.roundNum,
    stash: state.stash,
    playOrder: state.playOrder,
    playIndex: state.playIndex,
    players: state.players
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
    takeStash: (playerId, stash) => {
      dispatch(takeCoinsFromStash(playerId, stash));
    },
    setCurrPlayer: index => {
      dispatch(setPlayIndex(index));
    },
    setRound: num => {
      dispatch(setRoundNum(num));
    },
    buyCardFor: (card, player, levelId) => {
      dispatch(buyCard(card, player, levelId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
