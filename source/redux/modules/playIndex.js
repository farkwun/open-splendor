import { UPDATE_STATE, newState } from "./shared";

// Action types
const SET = "set";

// Action creators
export const setPlayIndex = index => ({
  type: SET,
  index
});

// Reducer
export default (state = 0, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return newState(action.state.playIndex, state);
    case SET:
      return action.index;
    default:
      return state;
  }
};
