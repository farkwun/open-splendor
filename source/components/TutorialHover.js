import React, { Component } from "react";

import { setTutorial, resetTutorial } from "../redux/modules/tutorial";

import store from "../redux/store";

const { dispatch } = store;

export const showTutorialOnHover = (header, body) => BaseComponent => {
  return class ShowTutorial extends Component {
    set = () => {
      dispatch(setTutorial(header, body));
    };

    clear = () => {
      dispatch(resetTutorial());
    };

    render() {
      return (
        <div onMouseEnter={this.set} onMouseLeave={this.clear}>
          <BaseComponent {...this.props} />
        </div>
      );
    }
  };
};
