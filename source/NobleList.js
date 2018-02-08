import React from "react";
import PropTypes from "prop-types";

import Noble from "./Noble";

class NobleList extends React.Component {
  render() {
    const nobles = this.props.nobleList.map(nobleId => {
      const noble = this.props.nobles[nobleId];
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

    while (placeholders.length + nobles.length < 5) {
      placeholders.push(<Noble placeholder="True" />);
    }

    return <div className="noble__list">{placeholders.concat(nobles)}</div>;
  }
}

NobleList.propTypes = {
  nobleList: PropTypes.array.isRequired,

  nobles: PropTypes.object.isRequired
};

export default NobleList;
