import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "./Card";

class CardStack extends Component {
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

CardStack.propTypes = {
  type: PropTypes.string.isRequired,

  cards: PropTypes.array
};

export default CardStack;
