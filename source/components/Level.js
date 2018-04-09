import React, { Component } from "react";
import PropTypes from "prop-types";

import CardBox from "./CardBox";

import { canBuyCard } from "../helpers/Helpers";

class Level extends Component {
  render() {
    const me = this.props.me;
    const levelCards = this.props.rowCards.map((cardId, idx) => {
      if (cardId === null) {
        return <div key={idx} className={"card__box"} />;
      }
      const buyable = canBuyCard(me, cardId);
      const buyCard = () => this.props.buyCard(cardId);
      const reserveCard = () => this.props.reserveCard(cardId);
      return (
        <CardBox
          key={cardId}
          cardId={cardId}
          buyable={buyable}
          buyCard={buyCard}
          reserveCard={reserveCard}
          getBonus={this.props.getBonus}
        />
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
