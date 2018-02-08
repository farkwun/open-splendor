import React from "react";
import PropTypes from "prop-types";

import Prestige from "./Prestige";
import Cost from "./Cost";

class Card extends React.Component {
  render() {
    if (this.props.id === "null") {
      return <div className="card" />;
    }
    const costs = Object.keys(this.props.costs).map(key => (
      <Cost
        key={key}
        val={this.props.costs[key]}
        type={key}
        getBonus={this.props.getBonus}
      />
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

Card.propTypes = {
  id: PropTypes.string,
  prestige: PropTypes.number,
  type: PropTypes.string,

  costs: PropTypes.object,

  getBonus: PropTypes.func
};

export default Card;
