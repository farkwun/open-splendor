import React from "react";

import Prestige from "./Prestige";
import Cost from "./Cost";

class Noble extends React.Component {
  render() {
    if (this.props.placeholder) {
      return (
        <div className="noble__box">
          <div className="noble__placeholder" />
        </div>
      );
    }
    const backgroundStyle = {
      backgroundImage: "url(" + this.props.imgURL + ")",
      backgroundSize: "contain"
    };

    const costs = Object.keys(this.props.costs).map(key => (
      <Cost key={key} val={this.props.costs[key]} type={key} />
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
