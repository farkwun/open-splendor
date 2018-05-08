import React, { Component } from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";
import Cost from "./Cost";
import Jewel from "./Jewel";

import { cards } from "../data/static";

class Card extends Component {
  render() {
    if (this.props.id === "null") {
      return <div className="card" />;
    }
    const card = cards[this.props.id];
    const costs = Object.keys(card.costs).map(key => (
      <Cost
        key={key}
        val={card.costs[key]}
        type={key}
        discount={this.props.getBonus && this.props.getBonus(key)}
      />
    ));

    return (
      <div className="card">
        <Prestige prestige={card.prestige} />
        <Jewel color={card.type} />
        {costs}
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string
};

export default Card;
