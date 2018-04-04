import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";
import Cost from "./Cost";
import Jewel from "./Jewel";
import { showTutorialOnHover } from "./TutorialHover";

import { cards } from "../data/static";

const className = "card";
const header = "Development Card";
const body = (
  <div>
    Development cards are the main way players interact with one another and
    achieve victory.
    <br />
    <br />
    Development cards have three main elements: Prestige, cost, and type.
    <br />
    <br />
    Prestige is represented by the large number in the top left. Buying a card
    will immediately give you the Prestige associated with that card.
    <br />
    <br />
    Costs are represented by the color-coded amounts below the card&apos;s
    prestige. You must be able to pay all the costs on the card (after applying
    discounts) in order to buy it. The discounted cost will be displayed on the
    right of the cost.
    <br />
    <br />
    Type is represented by the colored gem in the top right corner. The type of
    a card determines which discount it will provide once it is in your
    collection.
    <br />
    <br />
    Buyable cards will glow green when you hover over them!
  </div>
);

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
        getBonus={this.props.getBonus}
      />
    ));

    return (
      <Fragment>
        <Prestige prestige={card.prestige} />
        <Jewel color={card.type} />
        {costs}
      </Fragment>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string,

  getBonus: PropTypes.func
};

export default showTutorialOnHover(header, body, className)(Card);
