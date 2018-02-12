import React, { Component } from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";
import CardTray from "./CardTray";
import NobleTray from "./NobleTray";
import Wallet from "./Wallet";
import { getPrestigeFor } from "../helpers/Helpers";

class PlayerCard extends Component {
  render() {
    const cards = this.props.player.cards.map(id => this.props.cards[id]);
    const nobles = this.props.player.nobles.map(id => this.props.nobles[id]);
    const netPrestige =
      this.props.player.prestige +
      getPrestigeFor(cards) +
      getPrestigeFor(nobles);

    return (
      <div className="player__card">
        <Prestige prestige={netPrestige} />
        <h1 className="player__name">{this.props.player.id}</h1>
        <CardTray cards={cards} />
        <NobleTray
          nobles={this.props.nobles}
          playerNobles={this.props.player.nobles}
        />
        <Wallet coins={this.props.player.coins} />
      </div>
    );
  }
}

PlayerCard.propTypes = {
  cards: PropTypes.object.isRequired,
  nobles: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired
};

export default PlayerCard;
