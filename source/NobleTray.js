import React from "react";
import PropTypes from "prop-types";

import Noble from "./Noble";

class NobleTray extends React.Component {
  render() {
    const nobles = this.props.playerNobles.map(nobleId => {
      const noble = this.props.nobles[nobleId];
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
        {nobles}
      </div>
    );
  }
}

NobleTray.propTypes = {
  playerNobles: PropTypes.array.isRequired,

  nobles: PropTypes.object.isRequired
};

export default NobleTray;
