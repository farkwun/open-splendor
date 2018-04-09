import React, { Component } from "react";
import PropTypes from "prop-types";

import CardBox from "./CardBox";
import CardAggregate from "./CardAggregate";

class CardStack extends Component {
  render() {
    const cards = this.props.cards.reduce(
      (acc, card) =>
        card.type === this.props.type
          ? [...acc, <CardBox key={card.id} cardId={card.id} />]
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
