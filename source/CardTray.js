import React from "react";

import CardStack from "./CardStack";

class CardTray extends React.Component {
  render() {
    return (
      <div className="card__tray">
        <CardStack cards={this.props.cards} type="green" />
        <CardStack cards={this.props.cards} type="white" />
        <CardStack cards={this.props.cards} type="blue" />
        <CardStack cards={this.props.cards} type="black" />
        <CardStack cards={this.props.cards} type="red" />
      </div>
    );
  }
}

export default CardTray;
