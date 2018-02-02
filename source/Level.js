import React from 'react';

import Deck from './Deck';
import Card from './Card';
import * as helpers from './Helpers';

class Level extends React.Component {
  render() {
    let player = this.props.curr_player;
    let player_coins = helpers.getCoinsFor(player);
    let player_bonus = helpers.getBonusesFor(player);
    var cards = this.props.row_cards.map((card) => {
      let buyable = helpers.canBuyCard(player_coins, player_bonus, card);
      let className = "level__box";
      let onClick;
      if (buyable){
        className = "level__box__buyable";
        onClick = () => {
          this.props.buyCard(card, this.props.id)
        }
      }
      return (
        <div className={className} onClick={onClick}>
          <Card id={card.id}
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

