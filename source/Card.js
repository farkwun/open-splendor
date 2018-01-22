import React from 'react';

import Prestige from './Prestige';

class Card extends React.Component {
  render() {
    let costs = this.props.costs.map((cost) => (
      <div className="cost" style={{backgroundColor: cost.type}}>
        {cost.val}
      </div>
    ));

    return (
      <div className="card">
        <Prestige prestige={this.props.prestige} />
        {this.props.type}
        {costs}
      </div>
    );
  }
}

export default Card;
