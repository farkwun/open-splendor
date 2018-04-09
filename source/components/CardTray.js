import React, { Component } from "react";
import PropTypes from "prop-types";

import CardStack from "./CardStack";
import ReserveCards from "./ReserveCards";

class CardTray extends Component {
  render() {
    return (
      <div className="card__tray">
        <CardStack cards={this.props.cards} type="black" />
        <CardStack cards={this.props.cards} type="white" />
        <CardStack cards={this.props.cards} type="blue" />
        <CardStack cards={this.props.cards} type="green" />
        <CardStack cards={this.props.cards} type="red" />
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
