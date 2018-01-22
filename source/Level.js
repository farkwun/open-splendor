import React from 'react';

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
    <div className="deck" id={this.props.level_id}>
      {this.props.level_id}
      {cards}
    </div>
    );
  }
}

export default Level;

