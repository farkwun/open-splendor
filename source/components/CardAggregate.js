import React, { Component } from "react";

import Prestige from "./Prestige";

import { PALETTE } from "../data/static.js";

class CardAggregate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCards: false
    };
  }

  hide = () => {
    this.setState({
      showCards: false
    });
  };

  show = () => {
    this.setState({
      showCards: true
    });
  };

  render() {
    const myCards = (
      <div
        className="my__cards"
        style={{ borderColor: PALETTE["colorblind"][this.props.type] }}
      >
        {this.props.cards}
      </div>
    );
    return (
      <div
        className="aggregate"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        style={{ backgroundColor: PALETTE["colorblind"][this.props.type] }}
      >
        <Prestige prestige={this.props.bonus} />
        {this.state.showCards ? myCards : <div />}
      </div>
    );
  }
}

export default CardAggregate;
