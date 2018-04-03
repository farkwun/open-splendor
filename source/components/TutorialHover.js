import React, { Component } from "react";

import { pushTutorial, popTutorial } from "../redux/modules/tutorial";

import store from "../redux/store";

const { dispatch } = store;

export const showTutorialOnHover = (
  header,
  body,
  className
) => BaseComponent => {
  return class ShowTutorial extends Component {
    set = () => {
      dispatch(pushTutorial({ header, body }));
    };

    clear = () => {
      dispatch(popTutorial());
    };

    render() {
      return (
        <div
          className={className}
          onMouseEnter={this.set}
          onMouseLeave={this.clear}
        >
          <BaseComponent {...this.props} />
        </div>
      );
    }
  };
};
