import React, { Component } from "react";

class Tooltip extends Component {
  render() {
    return (
      <div className="tooltip">
        {this.props.header}
        <hr />
        {this.props.body}
      </div>
    );
  }
}

export default Tooltip;
