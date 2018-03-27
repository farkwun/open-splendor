import React, { Component } from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";
import CardTray from "./CardTray";
import NobleTray from "./NobleTray";
import Wallet from "./Wallet";
import { getPrestigeFor } from "../helpers/Helpers";
import { cards, nobles } from "../data/static";

class PlayerCard extends Component {
  render() {
    const playerCards = this.props.player.cards.map(id => cards[id]);
    const playerNobles = this.props.player.nobles.map(id => nobles[id]);

    return (
      <div
        className="player__card"
        style={{ backgroundColor: this.props.color }}
      >
        <Prestige prestige={this.props.player.prestige} />
        <h1 className="player__name">{this.props.player.id}</h1>
        <CardTray cards={playerCards} />
        <div className="player__items">
          <Wallet coins={this.props.player.coins} />
          <NobleTray playerNobles={this.props.player.nobles} />
        </div>
      </div>
    );
  }
}

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerCard;
