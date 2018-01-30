import React from 'react';

import Prestige from './Prestige';
import Cost from './Cost';

class Noble extends React.Component {
  render() {
    if (this.props.placeholder) {
      return (
        <div className="noble__box">
          <div className="noble__placeholder">
          </div>
        </div>
      );
    }
    var backgroundStyle={
      backgroundImage: "url(" + this.props.img_url + ")",
      backgroundSize: "contain"
    };

    let costs = this.props.costs.map((cost) => (
      <Cost val={cost.val}
        type={cost.type} />
    ));

    return (
      <div className="noble__box">
        <div className="noble" style={backgroundStyle}>
          <Prestige prestige={this.props.prestige} />
          {costs}
        </div>
      </div>
    );
  }
}

export default Noble;
