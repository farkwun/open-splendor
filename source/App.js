import React from "react";

import GameBoard from "./GameBoard";
import Info from "./Info";

import * as mock from "./MockData";
import * as helpers from "./Helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nobles: mock.nobles,
      levels: mock.levels,
      coins: mock.coins,
      round_num: mock.round_num,
      stash: [],
      play_order: mock.play_order,
      play_index: mock.play_index,
      players: mock.players
    };
  }

  getCurrPlayer() {
    const curr_player_id = this.state.play_order[this.state.play_index];
    return this.state.players.find(player => player.id === curr_player_id);
  }

  getBonus = type => {
    return this.getCurrPlayer().cards.filter(c => {
      return c.type === type;
    }).length;
  };

  buyCard = (card, level_id) => {
    const curr_player_id = this.state.play_order[this.state.play_index];
    const curr_player = this.state.players.find(
      player => player.id === curr_player_id
    );

    const levels = helpers.updateIn(
      this.state.levels,
      level => level.id === level_id,
      level => {
        const row_cards = level.row_cards.map(
          r_c => (r_c.id === card.id ? { ...card, id: "null" } : r_c)
        );
        return { ...level, row_cards };
      }
    );

    const players = helpers.updateIn(
      this.state.players,
      player => player.id === curr_player_id,
      player => ({
        ...player,
        cards: [...player.cards, card],
        coins: helpers.getCoinsLeft(player.coins, card, player)
      })
    );

    const coins = helpers.replenishedCoins(
      helpers.coinsSpent(card, curr_player),
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
    if (coinsLeft == 0 || this.state.stash.length >= 3) {
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
    const curr_player_id = this.getCurrPlayer().id;
    const players = helpers.updateIn(
      this.state.players,
      player => player.id === curr_player_id,
      player => {
        let new_player = { ...player };
        new_player.coins = helpers.mergeCoins(
          new_player.coins,
          this.state.stash
        );
        return new_player;
      }
    );
    this.setState({
      players
    });
    this.incrementPlayIndex();
  };

  clearStash = reset => {
    const stash = [];
    if (reset) {
      const coins = this.state.stash.reduce(
        (new_coins, { type }) => ((new_coins[type] += 1), new_coins),
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
    let index = this.state.play_index + 1;
    let round_num = this.state.round_num;

    if (index >= this.state.play_order.length) {
      index = 0;
      round_num = round_num + 1;
    }

    this.setState({
      play_index: index,
      round_num: round_num
    });
  };

  render() {
    const player = this.getCurrPlayer();

    return (
      <div className="app">
        <GameBoard
          nobles={this.state.nobles}
          levels={this.state.levels}
          coins={this.state.coins}
          stash={this.state.stash}
          players={this.state.players}
          getBonus={this.getBonus}
          curr_player={player}
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

React.render(<App />, document.getElementById("root"));
