import React from 'react';

import Noble from './Noble';

class NobleList extends React.Component {
  render() {
    var nobles = this.props.nobles.map((noble) => {
      return <Noble id={noble.id}
        prestige={noble.prestige}
        costs={noble.costs}
        img_url={noble.img_url}
      />
    });
    return (
      <div className="noble__list">
        {nobles}
      </div>
    );
  }
}

export default NobleList;
