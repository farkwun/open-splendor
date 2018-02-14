import * as mock from "./MockData";

// Action types
const SET = "set";

// Action creators
export const setPlayIndex = index => ({
  type: SET,
  index
});

// Reducer
export default (state = mock.playIndex, action) => {
  switch (action.type) {
    case SET:
      return action.index;
    default:
      return state;
  }
};
