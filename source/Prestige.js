import React, { Component } from "react";
import PropTypes from "prop-types";

class Prestige extends Component {
  render() {
    return <div className="prestige">{this.props.prestige}</div>;
  }
}

Prestige.propTypes = {
  prestige: PropTypes.number.isRequired
};

export default Prestige;
