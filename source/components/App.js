import React, { Component } from "react";
import { connect } from "react-redux";

import GameBoard from "./GameBoard";
import Info from "./Info";

import {
  updateIn,
  getCoinsLeft,
  replenishedCoins,
  coinsSpent,
  mergeCoins
} from "../helpers/Helpers";

import {
  addCoinToStash,
  removeCoinFromStash,
  resetStash,
  takeCoinsFromStash
} from "../redux/modules/shared";

import { setPlayIndex } from "../redux/modules/playIndex";
import { setRoundNum } from "../redux/modules/roundNum";

class App extends Component {
  getCurrPlayer() {
    const currPlayerId = this.props.playOrder[this.props.playIndex];
    return this.props.players[currPlayerId];
  }

  getBonus = type => {
    return this.getCurrPlayer().cards.filter(
      cardId => this.props.cards[cardId].type === type
    ).length;
  };

  buyCard = (cardId, levelId) => {
    const currPlayerId = this.props.playOrder[this.props.playIndex];
    const currPlayer = this.props.players[currPlayerId];

    const card = this.props.cards[cardId];

    const levels = updateIn(
      this.props.levels,
      level => level.id === levelId,
      level => {
        const rowCards = level.rowCards.map(
          rowCardId => (rowCardId === cardId ? null : rowCardId)
        );
        return { ...level, rowCards };
      }
    );

    const players = {
      ...this.props.players,
      [currPlayerId]: {
        ...currPlayer,
        cards: [...currPlayer.cards, cardId],
        coins: getCoinsLeft(
          currPlayer.coins,
          card,
          currPlayer,
          this.props.cards
        )
      }
    };

    const coins = replenishedCoins(
      coinsSpent(card, currPlayer, this.props.cards),
      this.props.coins
    );

    this.setState({
      levels,
      coins,
      players
    });

    this.incrementPlayIndex();
  };

  addToStash = type => {
    const coinsLeft = this.props.coins[type];
    if (coinsLeft === 0 || this.props.stash.length >= 3) {
      return;
    }
    this.props.addToStash(type);
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
          nobles={this.props.nobles}
          levels={this.props.levels}
          cards={this.props.cards}
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
    nobles: state.nobles,
    levels: state.levels,
    cards: state.cards,
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
