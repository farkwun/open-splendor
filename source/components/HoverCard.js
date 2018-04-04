import React, { Component } from "react";

import CardOverlay from "./CardOverlay";

class HoverCard extends Component {
  state = { show: false };

  show = () => this.setState({ show: true });

  hide = () => this.setState({ show: false });

  render() {
    return (
      <div
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        className={this.props.buyable ? "level__box__buyable" : "level__box"}
      >
        {this.state.show && (
          <CardOverlay
            buyCard={this.props.buyable && this.props.buyCard}
            reserveCard={this.props.reserveCard}
          />
        )}
        {this.props.children}
      </div>
    );
  }
}

export default HoverCard;
