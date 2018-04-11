import React, { Component } from "react";

import Card from "./Card";
import CardOverlay from "./CardOverlay";

import { pushTutorial, popTutorial } from "../redux/modules/tutorial";

import store from "../redux/store";

const { dispatch } = store;

const header = "Development Card";
const body = (
  <div>
    Development cards are the main way players interact with one another and
    achieve victory.
    <br />
    <br />
    Cards can be either bought or reserved. You can only have three cards
    reserved at a time. Reserving a card places it in your Player Card and also
    gives you a joker coin (if you have room for the coin and if there are any
    left).
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

class CardBox extends Component {
  state = { show: false };

  show = () => {
    dispatch(pushTutorial({ header, body }));
    this.setState({ show: true });
  };

  hide = () => {
    dispatch(popTutorial());
    this.setState({ show: false });
  };

  render() {
    return (
      <div
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        className={this.props.buyable ? "card__box buyable" : "card__box"}
      >
        {this.state.show && (
          <CardOverlay
            buyCard={this.props.buyable ? this.props.buyCard : undefined}
            reserveCard={
              this.props.reserveCard ? this.props.reserveCard : undefined
            }
          />
        )}
        <Card id={this.props.cardId} getBonus={this.props.getBonus} />
      </div>
    );
  }
}

export default CardBox;
