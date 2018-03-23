import React, { Component } from "react";
import PropTypes from "prop-types";

import Noble from "./Noble";
import Prestige from "./Prestige";
import { nobles } from "../data/static";

class NobleTray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNobles: false
    };
  }

  hide = () => {
    this.setState({
      showNobles: false
    });
  };

  show = () => {
    console.log("Herae");
    this.setState({
      showNobles: true
    });
  };

  render() {
    const playerNobles = (
      <div className="my__nobles">
        {this.props.playerNobles.map(nobleId => {
          const noble = nobles[nobleId];
          return (
            <Noble
              key={noble.id}
              prestige={noble.prestige}
              costs={noble.costs}
              img_url={noble.img_url}
            />
          );
        })}
      </div>
    );

    return (
      <div
        className="noble__tray centered"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
      >
        <h3 className="box__header">Nobles</h3>
        <Prestige prestige={this.props.playerNobles.length} />
        {this.state.showNobles ? playerNobles : <div />}
      </div>
    );
  }
}

NobleTray.propTypes = {
  playerNobles: PropTypes.array.isRequired
};

export default NobleTray;
