import React, { Component } from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";
import NobleCost from "./NobleCost";
import { showTutorialOnHover } from "./TutorialHover";

const className = "noble__box";
const header = "Nobles";
const body = (
  <div>
    Nobles are special pieces in Splendor with which players cannot directly
    interact.
    <br />
    <br />
    If a player meets a noble&apos;s requirements, that player will receive a
    visit from that noble - immediately gaining the Prestige points associated
    and removing the noble from the board.
    <br />
    <br />
    Unlike development cards, nobles cannot be bought directly, and their
    requirement costs are not measured in coins. In order to get a visit from a
    noble, players must obtain the number and type of cards listed on that
    noble.
    <br />
    <br />
    Once they have met these requirements, the noble will be automatically added
    to the player&apos;s Player Card and the noble&apos;s Prestige points
    applied.
  </div>
);

class Noble extends Component {
  render() {
    if (this.props.placeholder) {
      return <div className="noble__placeholder" />;
    }

    const backgroundStyle = {
      backgroundImage: "url(" + this.props.imgURL + ")",
      backgroundSize: "contain"
    };

    const costs = Object.keys(this.props.costs).map(type => (
      <NobleCost key={type} val={this.props.costs[type]} type={type} />
    ));

    return (
      <div className="noble" style={backgroundStyle}>
        <Prestige prestige={this.props.prestige} />
        {costs}
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

export default showTutorialOnHover(header, body, className)(Noble);
