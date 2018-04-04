import React, { Component } from "react";
import { connect } from "react-redux";

import { showTutorial, hideTutorial } from "../redux/modules/tutorial";

class Settings extends Component {
  toggleTutorial = () =>
    this.props.tutorial.show
      ? this.props.hideTooltips()
      : this.props.showTooltips();

  render() {
    return (
      <div className="settings centered">
        <label>
          Tooltips
          <input
            name="Tooltips"
            type="checkbox"
            checked={this.props.tutorial.show}
            onClick={this.toggleTutorial}
          />
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tutorial: state.tutorial
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTooltips: () => dispatch(showTutorial()),
    hideTooltips: () => dispatch(hideTutorial())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
