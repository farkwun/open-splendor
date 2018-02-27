import React, { Component } from "react";
import PropTypes from "prop-types";

class PlayerRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.text}</td>
      </tr>
    );
  }
}

PlayerRow.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
export default PlayerRow;
