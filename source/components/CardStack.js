import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "./Card";

class CardStack extends Component {
  render() {
    const cards = this.props.cards.reduce(
      (acc, card) =>
        card.type === this.props.type
          ? [
              ...acc,
              <div key={card.id} className="stack">
                <Card key={card.id} id={card.id} />
              </div>
            ]
          : acc,
      []
    );

    return (
      <div className="card__stack">
        <div className="reminder__text centered">{cards.length}</div>
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
