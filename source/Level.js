import React, { Component } from "react";
import PropTypes from "prop-types";

import Deck from "./Deck";
import Card from "./Card";
import { getBonusAggregateFor, canBuyCard } from "./Helpers";

class Level extends Component {
  render() {
    const player = this.props.currPlayer;
    const playerCoins = player.coins;
    const playerBonus = getBonusAggregateFor(player, this.props.cards);
    const cards = this.props.rowCards.map((cardId, idx) => {
      if (cardId === null) {
        return <div key={idx} className={"level__box"} />;
      }
      const card = this.props.cards[cardId];
      const buyable = canBuyCard(playerCoins, playerBonus, card);
      let className = "level__box";
      let onClick;
      if (buyable) {
        className = "level__box__buyable";
        onClick = () => {
          this.props.buyCard(cardId, this.props.id);
        };
      }
      return (
        <div key={card.id} className={className} onClick={onClick}>
          <Card
            card={card}
            key={card.id}
            prestige={card.prestige}
            costs={card.costs}
            type={card.type}
            getBonus={this.props.getBonus}
          />
        </div>
      );
    });

    return (
      <div className="level" id={this.props.id}>
        <div className="level__box">
          <Deck id={this.props.id} />
        </div>
        {cards}
      </div>
    );
  }
}

Level.propTypes = {
  id: PropTypes.string.isRequired,

  rowCards: PropTypes.array.isRequired,

  cards: PropTypes.object.isRequired,
  currPlayer: PropTypes.object.isRequired,

  buyCard: PropTypes.func.isRequired,
  getBonus: PropTypes.func.isRequired
};

export default Level;
