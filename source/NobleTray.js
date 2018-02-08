import React from "react";

import Noble from "./Noble";

class NobleTray extends React.Component {
  render() {
    const nobles = this.props.player_nobles.map(noble_id => {
      const noble = this.props.nobles[noble_id];
      return (
        <Noble
          id={noble.id}
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

export default NobleTray;
