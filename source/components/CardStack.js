import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import CardAggregate from "./CardAggregate";

class CardStack extends Component {
  render() {
    const cards = this.props.cards.reduce(
      (acc, card) =>
        card.type === this.props.type
          ? [
              ...acc,
              <div key={card.id} className="level__box">
                <Card id={card.id} />
              </div>
            ]
          : acc,
      []
    );

    const bonus = this.props.cards.reduce(
      (sum, card) => (card.type === this.props.type ? sum + 1 : sum),
      0
    );

    return <CardAggregate type={this.props.type} cards={cards} bonus={bonus} />;
  }
}

CardStack.propTypes = {
  type: PropTypes.string.isRequired,

  cards: PropTypes.array
};

export default CardStack;
