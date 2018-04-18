import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Toast extends Component {
  render() {
    return this.props.showToast ? (
      <div className="toast">
        <h4 className="centered">{this.props.toastText}</h4>
      </div>
    ) : (
      <div />
    );
  }
}

Toast.propTypes = {
  showToast: PropTypes.bool.isRequired,
  toastText: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    showToast: state.toast.showToast,
    toastText: state.toast.toastText
  };
}

export default connect(mapStateToProps)(Toast);
