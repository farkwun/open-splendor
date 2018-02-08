import React from "react";

import Deck from "./Deck";
import Card from "./Card";
import * as helpers from "./Helpers";

class Level extends React.Component {
  render() {
    const player = this.props.currPlayer;
    const playerCoins = player.coins;
    const playerBonus = helpers.getBonusAggregateFor(player, this.props.cards);
    const cards = this.props.rowCards.map((cardId, idx) => {
      if (cardId === null) {
        return <div key={idx} className={"level__box"} />;
      }
      const card = this.props.cards[cardId];
      const buyable = helpers.canBuyCard(playerCoins, playerBonus, card);
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

export default Level;
