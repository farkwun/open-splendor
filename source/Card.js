import React from "react";

import Prestige from "./Prestige";
import Cost from "./Cost";

class Card extends React.Component {
  render() {
    if (this.props.id === "null") {
      return <div className="card" />;
    }
    let costs = this.props.costs.map(cost => (
      <Cost val={cost.val} type={cost.type} getBonus={this.props.getBonus} />
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
