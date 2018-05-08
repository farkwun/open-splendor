import React, { Component } from "react";
import PropTypes from "prop-types";

import Noble from "./Noble";
import { nobles } from "../data/static";

class NobleList extends Component {
  render() {
    const theNobles = this.props.nobleList.map((nobleId, idx) => {
      if (nobleId === null) {
        return <Noble key={idx} placeholder={true} />;
      }
      const noble = nobles[nobleId];
      return (
        <Noble
          key={noble.id}
          prestige={noble.prestige}
          costs={noble.costs}
          imgURL={`source/data/img/noble.png`}
        />
      );
    });

    return <div className="noble__list">{theNobles}</div>;
  }
}

NobleList.propTypes = {
  nobleList: PropTypes.array.isRequired
};

export default NobleList;
