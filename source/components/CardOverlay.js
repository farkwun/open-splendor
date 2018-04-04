import React, { Component, Fragment } from "react";

import { showTutorialOnHover } from "./TutorialHover";

const className = "card__overlay";
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

class CardOverlay extends Component {
  render() {
    return (
      <Fragment>
        <div className="overlay__buttons">
          <button
            className="button"
            disabled={!this.props.buyCard}
            onClick={this.props.buyCard}
          >
            Buy
          </button>
          <br />
          <br />
          <button className="button" onClick={this.props.reserveCard}>
            Reserve
          </button>
        </div>
      </Fragment>
    );
  }
}

export default showTutorialOnHover(header, body, className)(CardOverlay);
