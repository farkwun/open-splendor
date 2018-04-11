import React, { Component } from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";
import CardTray from "./CardTray";
import NobleTray from "./NobleTray";
import Wallet from "./Wallet";
import { showTutorialOnHover } from "./TutorialHover";

import { getPrestigeFor } from "../helpers/Helpers";
import { cards, nobles } from "../data/static";

const header = "Player Card";
const body = (
  <div>
    Each player has a card that represents their important game information.
    <br />
    <br />
    Each card displays the current Prestige of the player, the numbers and types
    of coins in their possession, the numbers and types of cards in their
    possession, and the number of Nobles that have visited them.
    <br />
    <br />
    Each player card displays 5 card aggregates (represented by the gem type and
    number of cards of that type) and 1 Noble aggregate, representing each
    player&apos;s total discount per gem type and the Nobles that have visited
    that player, respectively. Hover over each aggregate to see the cards of
    that type owned, and nobles visited, for that player.
    <br />
    <br />
  </div>
);

class PlayerCard extends Component {
  render() {
    const playerCards = this.props.player.cards.map(id => cards[id]);
    const reserveCards = this.props.player.reserved.map(id => cards[id]);

    return (
      <div
        className={
          this.props.currPlayer.id == this.props.player.id
            ? "player__card active"
            : "player__card"
        }
        style={{ backgroundColor: this.props.color }}
      >
        <Prestige prestige={this.props.player.prestige} />
        <h1 className="player__name">{this.props.player.id}</h1>
        <CardTray
          me={this.props.me}
          cards={playerCards}
          reserved={reserveCards}
          buyCard={this.props.buyCard}
          getBonus={this.props.getBonus}
          isMyCards={this.props.me.id === this.props.player.id}
        />
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

export default showTutorialOnHover(header, body)(PlayerCard);
