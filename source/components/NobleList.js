import React, { Component } from "react";
import PropTypes from "prop-types";

import Noble from "./Noble";
import { nobles } from "../data/static";

class NobleList extends Component {
  render() {
    const theNobles = this.props.nobleList.map(nobleId => {
      const noble = nobles[nobleId];
      return (
        <Noble
          key={noble.id}
          prestige={noble.prestige}
          costs={noble.costs}
          imgURL={noble.imgURL}
        />
      );
    });

    let placeholders = [];

    while (placeholders.length + theNobles.length < 5) {
      placeholders.push(<Noble key={placeholders.length} placeholder={true} />);
    }

    return <div className="noble__list">{placeholders.concat(theNobles)}</div>;
  }
}

NobleList.propTypes = {
  nobleList: PropTypes.array.isRequired
};

export default NobleList;
