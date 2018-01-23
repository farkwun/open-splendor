import React from 'react';

import Noble from './Noble';

class NobleTray extends React.Component {
  render() {
    var nobles = this.props.nobles.map((noble) => {
      return (
        <Noble id={noble.id}
          prestige={noble.prestige}
          costs={noble.costs}
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
