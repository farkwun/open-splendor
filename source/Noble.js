import React from 'react';

import Prestige from './Prestige';

class Noble extends React.Component {
  render() {
    var backgroundStyle={
      backgroundImage: "url(" + this.props.img_url + ")",
      backgroundSize: "contain"
    };

    let costs = this.props.costs.map((cost) => (
      <div className="cost" style={{backgroundColor: cost.type}}>
        {cost.val}
      </div>
    ));


    return (
      <div className="noble" style={backgroundStyle}>
        <Prestige prestige={this.props.prestige} />
        {costs}
      </div>
    );
  }
}

export default Noble;
