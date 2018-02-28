import { UPDATE_STATE, newState } from "./shared";

export default (state = false, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return newState(action.state.active, state);
    default:
      return state;
  }
};
