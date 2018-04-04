import React, { Component } from "react";
import PropTypes from "prop-types";

import Deck from "./Deck";
import Card from "./Card";
import HoverCard from "./HoverCard";
import { canBuyCard } from "../helpers/Helpers";

class Level extends Component {
  render() {
    const me = this.props.me;
    const levelCards = this.props.rowCards.map((cardId, idx) => {
      if (cardId === null) {
        return <div key={idx} className={"level__box"} />;
      }
      const buyable = canBuyCard(me, cardId);
      const buyCard = () => this.props.buyCard(cardId);
      return (
        <HoverCard
          key={cardId}
          buyable={buyable}
          buyCard={buyCard}
          reserveCard={undefined}
        >
          <Card id={cardId} getBonus={this.props.getBonus} />
        </HoverCard>
      );
    });

    return (
      <div className="level" id={this.props.id}>
        {levelCards}
      </div>
    );
  }
}

Level.propTypes = {
  id: PropTypes.string.isRequired,

  rowCards: PropTypes.array.isRequired,

  me: PropTypes.object.isRequired,

  buyCard: PropTypes.func.isRequired,
  getBonus: PropTypes.func.isRequired
};

export default Level;
