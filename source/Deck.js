import React from "react";

class Deck extends React.Component {
  render() {
    return <div className="deck">{this.props.id}</div>;
  }
}

export default Deck;
