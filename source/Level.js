import React from 'react';

import Deck from './Deck';
import Card from './Card';

class Level extends React.Component {
  render() {
    var cards = this.props.row_cards.map((card) => {
      return <Card id={card.id}
        prestige={card.prestige}
        costs={card.costs}
        type={card.type}
      />
    });

    return (
    <div className="level" id={this.props.id}>
      <Deck id={this.props.id} />
      {cards}
    </div>
    );
  }
}

export default Level;

