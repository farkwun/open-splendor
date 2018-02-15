import React, { Component } from "react";
import PropTypes from "prop-types";

import Noble from "./Noble";
import { nobles } from "../data/static";

class NobleTray extends Component {
  render() {
    const playerNobles = this.props.playerNobles.map(nobleId => {
      const noble = nobles[nobleId];
      return (
        <Noble
          key={noble.id}
          prestige={noble.prestige}
          costs={noble.costs}
          img_url={noble.img_url}
        />
      );
    });

    return (
      <div className="noble__tray">
        <h3 className="box__header">Nobles</h3>
        {playerNobles}
      </div>
    );
  }
}

NobleTray.propTypes = {
  playerNobles: PropTypes.array.isRequired
};

export default NobleTray;
