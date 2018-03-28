import React, { Component } from "react";
import PropTypes from "prop-types";

class Noble extends Component {
  render() {
    if (this.props.placeholder) {
      return (
        <div className="noble__box">
          <div className="noble__placeholder" />
        </div>
      );
    }
    const backgroundStyle = {
      backgroundImage: "url(" + this.props.imgURL + ")",
      backgroundSize: "contain"
    };

    return (
      <div className="noble__box">
        <div className="noble" style={backgroundStyle} />
      </div>
    );
  }
}

Noble.propTypes = {
  placeholder: PropTypes.bool,
  prestige: PropTypes.number,
  imgURL: PropTypes.string,

  costs: PropTypes.object
};

export default Noble;
