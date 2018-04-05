import React, { Component } from "react";

class CardOverlay extends Component {
  render() {
    return (
      <div className="card__overlay">
        <div className="overlay__buttons">
          {this.props.buyCard && (
            <button className="button" onClick={this.props.buyCard}>
              Buy
            </button>
          )}
          <br />
          <button className="button" onClick={this.props.reserveCard}>
            Reserve
          </button>
        </div>
      </div>
    );
  }
}

export default CardOverlay;
