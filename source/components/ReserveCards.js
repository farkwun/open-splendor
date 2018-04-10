import React, { Component } from "react";
import PropTypes from "prop-types";

import CardBox from "./CardBox";
import Prestige from "./Prestige";

import { canBuyCard } from "../helpers/Helpers";

class ReserveCards extends Component {
  state = { show: false };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const reserveCards = this.props.cards.map(({ id }, idx) => {
      const buyable = canBuyCard(this.props.me, id);
      const buyCard = () => this.props.buyCard(id);
      return this.props.isMyCards ? (
        <CardBox
          key={id}
          cardId={id}
          buyable={buyable}
          buyCard={buyCard}
          getBonus={this.props.getBonus}
        />
      ) : (
        <CardBox key={id} cardId={id} />
      );
    });
    const myReserved = (
      <div className="my__reserved" style={{ borderColor: "grey" }}>
        <h3 className="box__header centered">Reserved</h3>
        <div className="flexed">{reserveCards}</div>
      </div>
    );
    return (
      <div
        className="aggregate black__hover"
        style={{ backgroundColor: "grey" }}
      >
        {this.state.show && myReserved}
        <div onClick={this.toggle}>
          <Prestige prestige={this.props.numCards} />
        </div>
      </div>
    );
  }
}

ReserveCards.propTypes = {
  reserved: PropTypes.number.isRequired,
  numCards: PropTypes.number.isRequired
};

export default ReserveCards;
