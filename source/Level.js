import React from 'react';

import Deck from './Deck';
import Card from './Card';

class Level extends React.Component {
  render() {
    var cards = this.props.row_cards.map((card) => {
      return (
        <div className="level__box">
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

