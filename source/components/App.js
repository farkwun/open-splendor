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

  removeFromStash = index => {
    const { type } = this.props.stash[index];
    const coinsLeft = this.props.coins[type];
    const coins = { ...this.props.coins, [type]: coinsLeft + 1 };

    const stash = this.props.stash.filter((coin, idx) => idx !== index);

    this.setState({
      stash,
      coins
    });
  };

  addToStash = type => {
    const coinsLeft = this.props.coins[type];
    if (coinsLeft === 0 || this.props.stash.length >= 3) {
      return;
    }
    const stash = [...this.props.stash, { type }];
    const coins = { ...this.props.coins, [type]: coinsLeft - 1 };

    this.setState({
      stash,
      coins
    });
  };

  takeStash = () => {
    const currPlayerId = this.props.playOrder[this.props.playIndex];
    const currPlayer = this.props.players[currPlayerId];
    const players = {
      ...this.props.players,
      [currPlayerId]: {
        ...currPlayer,
        coins: mergeCoins(currPlayer.coins, this.props.stash)
      }
    };

    this.setState({
      players
    });
    this.incrementPlayIndex();
  };

  clearStash = reset => {
    const stash = [];
    if (reset) {
      const coins = this.props.stash.reduce(
        (newCoins, { type }) => ((newCoins[type] += 1), newCoins),
        this.props.coins
      );

      this.setState({
        coins
      });
    }
    this.setState({
      stash
    });
  };

  incrementPlayIndex = () => {
    let index = this.props.playIndex + 1;
    let roundNum = this.props.roundNum;

    if (index >= this.props.playOrder.length) {
      index = 0;
      roundNum = roundNum + 1;
    }

    this.setState({
      playIndex: index,
      roundNum: roundNum
    });
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
          removeFromStash={this.removeFromStash}
          addToStash={this.addToStash}
          takeStash={this.takeStash}
          clearStash={this.clearStash}
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
    stash: [],
    playOrder: state.playOrder,
    playIndex: state.playIndex,
    players: state.players
  };
}

export default connect(mapStateToProps)(App);
