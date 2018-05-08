import React, { Component } from "react";
import PropTypes from "prop-types";

import CardStack from "./CardStack";
import ReserveCards from "./ReserveCards";

import { TYPE } from "../data/static.js";

class CardTray extends Component {
  render() {
    return (
      <div className="card__tray">
        <CardStack cards={this.props.cards} type={TYPE.ONYX} />
        <CardStack cards={this.props.cards} type={TYPE.DIAMOND} />
        <CardStack cards={this.props.cards} type={TYPE.SAPPHIRE} />
        <CardStack cards={this.props.cards} type={TYPE.EMERALD} />
        <CardStack cards={this.props.cards} type={TYPE.RUBY} />
        <ReserveCards
          me={this.props.me}
          isMyCards={this.props.isMyCards}
          buyCard={this.props.buyCard}
          cards={this.props.reserved}
          numCards={this.props.reserved.length}
          getBonus={this.props.getBonus}
        />
      </div>
    );
  }
}

CardTray.propTypes = {
  cards: PropTypes.array,
  reserved: PropTypes.array
};

export default CardTray;
