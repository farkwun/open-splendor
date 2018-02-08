import React from "react";

import Card from "./Card";

class CardStack extends React.Component {
  render() {
    const type = this.props.type;

    let cards = this.props.cards.map(card => {
      if (card.type === type) {
        return (
          <div key={card.id} className="stack">
            <Card
              key={card.id}
              prestige={card.prestige}
              costs={card.costs}
              type={card.type}
            />
          </div>
        );
      }
    });

    return (
      <div className="card__stack">
        <div className="groove">{cards}</div>
      </div>
    );
  }
}
export default CardStack;
