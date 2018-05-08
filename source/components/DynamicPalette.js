import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    palette: state.palette
  };
}

export const addDynamicPalette = BaseComponent => {
  return connect(mapStateToProps)(
    class DynamicPalette extends Component {
      render() {
        return <BaseComponent {...this.props} palette={this.props.palette} />;
      }
    }
  );
};
