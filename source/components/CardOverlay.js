import React, { Component } from "react";

class CardOverlay extends Component {
  render() {
    return this.props.buyCard || this.props.reserveCard ? (
      <div className="card__overlay">
        <div className="overlay__buttons">
          {this.props.buyCard && (
            <button className="button" onClick={this.props.buyCard}>
              Buy
            </button>
          )}
          <br />
          {this.props.reserveCard && (
            <button className="button" onClick={this.props.reserveCard}>
              Reserve
            </button>
          )}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default CardOverlay;
