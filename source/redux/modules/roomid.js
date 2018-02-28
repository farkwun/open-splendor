import { UPDATE_STATE, newState } from "./shared";

export default (state = "", action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return newState(action.state.roomId, state);
    default:
      return state;
  }
};
