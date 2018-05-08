import React, { Component } from "react";
import { connect } from "react-redux";

import { showTutorial, hideTutorial } from "../redux/modules/tutorial";
import {
  setPalette,
  COLORBLIND_PALETTE,
  DEFAULT_PALETTE
} from "../redux/modules/palette";

class Settings extends Component {
  toggleTutorial = () =>
    this.props.tutorial.show
      ? this.props.hideTooltips()
      : this.props.showTooltips();

  togglePalette = () =>
    this.isColorblind(this.props.palette.type)
      ? this.props.setDefault()
      : this.props.setColorblind();

  isColorblind = colorscheme => colorscheme === COLORBLIND_PALETTE;
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
        <label>
          Colorblind
          <input
            name="Colorblind"
            type="checkbox"
            checked={this.isColorblind(this.props.palette.type)}
            onClick={this.togglePalette}
          />
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tutorial: state.tutorial,
    palette: state.palette
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTooltips: () => dispatch(showTutorial()),
    hideTooltips: () => dispatch(hideTutorial()),
    setColorblind: () => dispatch(setPalette(COLORBLIND_PALETTE)),
    setDefault: () => dispatch(setPalette(DEFAULT_PALETTE))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
