import React, { Component } from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";

class ReserveCards extends Component {
  state = { show: false };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const myReserved = (
      <div className="my__cards" style={{ borderColor: "grey" }}>
        <h3 className="box__header centered">Reserved</h3>
        {this.props.reserved}
      </div>
    );
    return (
      <div
        className="aggregate black__hover"
        onClick={this.toggle}
        style={{ backgroundColor: "grey" }}
      >
        <Prestige prestige={this.props.numCards} />
        {this.state.show && myReserved}
      </div>
    );
  }
}

ReserveCards.propTypes = {
  reserved: PropTypes.number.isRequired,
  numCards: PropTypes.number.isRequired
};

export default ReserveCards;
