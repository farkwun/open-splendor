import React from "react";
import PropTypes from "prop-types";

class Deck extends React.Component {
  render() {
    return <div className="deck">{this.props.id}</div>;
  }
}

Deck.propTypes = {
  id: PropTypes.string.isRequired
};

export default Deck;
