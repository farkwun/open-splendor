import React from "react";

import Deck from "./Deck";
import Card from "./Card";
import * as helpers from "./Helpers";

class Level extends React.Component {
  render() {
    const player = this.props.curr_player;
    const player_coins = player.coins;
    const player_bonus = helpers.getBonusAggregateFor(player, this.props.cards);
    const cards = this.props.row_cards.map(card_id => {
      if (card_id === null) {
        return <div className={"level__box"} />;
      }
      const card = this.props.cards[card_id];
      const buyable = helpers.canBuyCard(player_coins, player_bonus, card);
      let className = "level__box";
      let onClick;
      if (buyable) {
        className = "level__box__buyable";
        onClick = () => {
          this.props.buyCard(card_id, this.props.id);
        };
      }
      return (
        <div className={className} onClick={onClick}>
          <Card
            card={card}
            id={card.id}
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
