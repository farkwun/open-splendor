import React from 'react';

class Cost extends React.Component {
  render() {
    let type = this.props.type;
    let val = this.props.val;
    let bonus = 0;

    let style = {
      backgroundColor: type
    };

    if (this.props.getBonus) {
      bonus = this.props.getBonus(type);
    }

    style.color = "white";
    if (bonus) {
      style.color = "#00ff00";
    }

    val = Math.max(0, val - bonus);

    return (
      <div className="cost" style={style}>
        {val}
      </div>
    );
  }
}

export default Cost;
