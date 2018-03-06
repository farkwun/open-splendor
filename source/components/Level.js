import React, { Component } from "react";
import PropTypes from "prop-types";

import Deck from "./Deck";
import Card from "./Card";
import { canBuyCard } from "../helpers/Helpers";

class Level extends Component {
  render() {
    const player = this.props.currPlayer;
    const levelCards = this.props.rowCards.map((cardId, idx) => {
      if (cardId === null) {
        return <div key={idx} className={"level__box"} />;
      }
      const buyable = canBuyCard(player, cardId);
      const buyCard = () => {
        this.props.buyCard(cardId);
      };
      return (
        <div
          key={cardId}
          className={buyable ? "level__box__buyable" : "level__box"}
          onClick={buyable ? buyCard : undefined}
        >
          <Card id={cardId} key={cardId} getBonus={this.props.getBonus} />
        </div>
      );
    });

    return (
      <div className="level" id={this.props.id}>
        <div className="level__box">
          <Deck id={this.props.id} />
        </div>
        {levelCards}
      </div>
    );
  }
}

Level.propTypes = {
  id: PropTypes.string.isRequired,

  rowCards: PropTypes.array.isRequired,

  currPlayer: PropTypes.object.isRequired,

  buyCard: PropTypes.func.isRequired,
  getBonus: PropTypes.func.isRequired
};

export default Level;
