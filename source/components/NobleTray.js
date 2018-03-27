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
    this.setState({
      showNobles: true
    });
  };

  render() {
    const playerNobles = (
      <div className="my__nobles">
        <h3 className="box__header centered">Nobles</h3>
        {this.props.playerNobles.map(nobleId => {
          const noble = nobles[nobleId];
          return (
            <Noble
              key={noble.id}
              prestige={noble.prestige}
              costs={noble.costs}
              imgURL={noble.imgURL}
            />
          );
        })}
      </div>
    );

    return (
      <div
        className="noble__tray"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
      >
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
