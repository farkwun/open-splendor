import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Spinner extends Component {
  render() {
    return this.props.isLoading ? (
      <img
        className="spinner"
        src="http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif"
      />
    ) : (
      <div />
    );
  }
}

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(Spinner);
