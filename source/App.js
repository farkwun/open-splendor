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
    let curr_player_id = this.state.play_order[this.state.play_index];
    return this.state.players.find(player => player.id === curr_player_id);
  }

  getBonus = type => {
    return this.getCurrPlayer().cards.filter(c => {
      return c.type === type;
    }).length;
  };

  buyCard = (card, level_id) => {
    let curr_player_id = this.state.play_order[this.state.play_index];

    let levels = helpers.updateObject(level_id, this.state.levels, level => {
      let new_level = { ...level };
      new_level.row_cards = level.row_cards.map(rc => {
        if (rc.id == card.id) {
          let new_card = { ...card };
          new_card.id = "null";
          return new_card;
        }
        return rc;
      });
      return new_level;
    });

    let players = helpers.updateObject(
      curr_player_id,
      this.state.players,
      player => {
        let new_player = { ...player };
        new_player.cards = [...player.cards];
        new_player.cards.push(card);

        let bonuses = helpers.getBonusesFor(player);
        let costs = {};

        card.costs.map(cost => {
          costs[cost.type] = cost.val;
        });

        new_player.coins = [...player.coins];

        new_player.coins = new_player.coins.map(coin => {
          let new_coin = { ...coin };
          if (coin.type in costs) {
            const bonus = bonuses[coin.type] ? bonuses[coin.type] : 0;
            new_coin.amount -= costs[coin.type] - bonus;
          }
          return new_coin;
        });

        new_player.coins = new_player.coins.filter(coin => coin.amount > 0);

        return new_player;
      }
    );

    let coins = [...this.state.coins];
    const curr_player = this.state.players.find(
      player => player.id === curr_player_id
    );

    const bonuses = helpers.getBonusesFor(curr_player);
    const costs = {};

    card.costs.map(cost => {
      costs[cost.type] = cost.val;
    });

    coins = coins.map(coin => {
      let new_coin = { ...coin };
      if (coin.type in costs) {
        const bonus = bonuses[coin.type] ? bonuses[coin.type] : 0;
        new_coin.amount += costs[coin.type] - bonus;
      }
      return new_coin;
    });

    this.setState({
      levels,
      coins,
      players
    });
    this.incrementPlayIndex();
  };

  removeFromStash = index => {
    let stash = [...this.state.stash];
    let [coin] = stash.splice(index, 1);
    let coins = helpers.addCoinAmount(this.state.coins, coin.type, 1);
    this.setState({
      stash,
      coins
    });
  };

  addToStash = type => {
    let stack = this.state.coins.find(coin => coin.type === type);
    if (stack.amount == 0 || this.state.stash.length >= 3) {
      return;
    }
    let stash = [...this.state.stash, { type }];
    let coins = helpers.addCoinAmount(this.state.coins, type, -1);

    this.setState({
      stash,
      coins
    });
  };

  addToStash = type => {
    let stack = this.state.coins.find(coin => coin.type === type);
    if (stack.amount == 0 || this.state.stash.length >= 3) {
      return;
    }
    let stash = [...this.state.stash, { type }];
    let coins = helpers.addCoinAmount(this.state.coins, type, -1);

    this.setState({
      stash,
      coins
    });
  };

  takeStash = () => {
    let curr_player_id = this.getCurrPlayer().id;
    let players = helpers.updateObject(
      curr_player_id,
      this.state.players,
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
    let stash = [];
    if (reset) {
      let coins = this.state.coins;
      this.state.stash.map(coin => {
        coins = helpers.addCoinAmount(coins, coin.type, 1);
      });
      this.setState({
        stash,
        coins
      });
    } else {
      this.setState({
        stash
      });
    }
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
    let player = this.getCurrPlayer();

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
