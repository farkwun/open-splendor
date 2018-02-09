import React, { Component } from "react";
import { render } from "react-dom";

import GameBoard from "./GameBoard";
import Info from "./Info";

import * as mock from "./MockData";
import {
  updateIn,
  getCoinsLeft,
  replenishedCoins,
  coinsSpent,
  mergeCoins
} from "./Helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nobleList: mock.nobleList,
      nobles: mock.nobles,
      levels: mock.levels,
      cards: mock.cards,
      coins: mock.coins,
      roundNum: mock.roundNum,
      stash: [],
      playOrder: mock.playOrder,
      playIndex: mock.playIndex,
      players: mock.players
    };
  }

  getCurrPlayer() {
    const currPlayerId = this.state.playOrder[this.state.playIndex];
    return this.state.players[currPlayerId];
  }

  getBonus = type => {
    return this.getCurrPlayer().cards.filter(
      cardId => this.state.cards[cardId].type === type
    ).length;
  };

  buyCard = (cardId, levelId) => {
    const currPlayerId = this.state.playOrder[this.state.playIndex];
    const currPlayer = this.state.players[currPlayerId];

    const card = this.state.cards[cardId];

    const levels = updateIn(
      this.state.levels,
      level => level.id === levelId,
      level => {
        const rowCards = level.rowCards.map(
          rowCardId => (rowCardId === cardId ? null : rowCardId)
        );
        return { ...level, rowCards };
      }
    );

    const players = {
      ...this.state.players,
      [currPlayerId]: {
        ...currPlayer,
        cards: [...currPlayer.cards, cardId],
        coins: getCoinsLeft(
          currPlayer.coins,
          card,
          currPlayer,
          this.state.cards
        )
      }
    };

    const coins = replenishedCoins(
      coinsSpent(card, currPlayer, this.state.cards),
      this.state.coins
    );

    this.setState({
      levels,
      coins,
      players
    });

    this.incrementPlayIndex();
  };

  removeFromStash = index => {
    const { type } = this.state.stash[index];
    const coinsLeft = this.state.coins[type];
    const coins = { ...this.state.coins, [type]: coinsLeft + 1 };

    const stash = this.state.stash.filter((coin, idx) => idx !== index);

    this.setState({
      stash,
      coins
    });
  };

  addToStash = type => {
    const coinsLeft = this.state.coins[type];
    if (coinsLeft === 0 || this.state.stash.length >= 3) {
      return;
    }
    const stash = [...this.state.stash, { type }];
    const coins = { ...this.state.coins, [type]: coinsLeft - 1 };

    this.setState({
      stash,
      coins
    });
  };

  takeStash = () => {
    const currPlayerId = this.state.playOrder[this.state.playIndex];
    const currPlayer = this.state.players[currPlayerId];
    const players = {
      ...this.state.players,
      [currPlayerId]: {
        ...currPlayer,
        coins: mergeCoins(currPlayer.coins, this.state.stash)
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
      const coins = this.state.stash.reduce(
        (newCoins, { type }) => ((newCoins[type] += 1), newCoins),
        this.state.coins
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
    let index = this.state.playIndex + 1;
    let roundNum = this.state.roundNum;

    if (index >= this.state.playOrder.length) {
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
          nobleList={this.state.nobleList}
          nobles={this.state.nobles}
          levels={this.state.levels}
          cards={this.state.cards}
          coins={this.state.coins}
          stash={this.state.stash}
          players={this.state.players}
          playOrder={this.state.playOrder}
          getBonus={this.getBonus}
          currPlayer={player}
          buyCard={this.buyCard}
          removeFromStash={this.removeFromStash}
          addToStash={this.addToStash}
          takeStash={this.takeStash}
          clearStash={this.clearStash}
        />
        <Info state={this.state} onClick={this.incrementPlayIndex} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
