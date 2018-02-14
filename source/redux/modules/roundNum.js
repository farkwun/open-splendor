import * as mock from "./MockData";

// Action types
const SET_ROUND = "set_round";

// Action creators
export const setRoundNum = num => ({
  type: SET_ROUND,
  num
});

// Reducer
export default (state = mock.roundNum, action) => {
  switch (action.type) {
    case SET_ROUND:
      return action.num;
    default:
      return state;
  }
};
