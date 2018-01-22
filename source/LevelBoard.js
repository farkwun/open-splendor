import React from 'react';

import Level from './Level';

class LevelBoard extends React.Component {
  render() {
    var levels = this.props.levels.map((level) => {
      return <Level id={level.level_id}
        row_cards={level.row_cards}
        />
    });
    return (
      <div className="level__board">
        {levels}
      </div>
    );
  }
}

export default LevelBoard;
