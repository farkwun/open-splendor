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
          cards={this.props.reserved}
          numCards={this.props.reserved.length}
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
