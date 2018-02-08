import React from "react";

import Noble from "./Noble";

class NobleList extends React.Component {
  render() {
    const nobles = this.props.noble_list.map(noble_id => {
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

    let placeholders = [];

    while (placeholders.length + nobles.length < 5) {
      placeholders.push(<Noble placeholder="True" />);
    }

    return <div className="noble__list">{placeholders.concat(nobles)}</div>;
  }
}

export default NobleList;
