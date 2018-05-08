import React, { Component } from "react";

import Prestige from "./Prestige";

import { addDynamicPalette } from "./DynamicPalette";

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
        style={{ borderColor: this.props.palette.colors[this.props.type] }}
      >
        {this.props.cards}
      </div>
    );
    return (
      <div
        className="aggregate"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        style={{ backgroundColor: this.props.palette.colors[this.props.type] }}
      >
        <Prestige prestige={this.props.bonus} />
        {this.state.showCards ? myCards : <div />}
      </div>
    );
  }
}

export default addDynamicPalette(CardAggregate);
