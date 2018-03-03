import { UPDATE_STATE, newState } from "./MockData";

// Action types
const SET_ROUND = "set_round";

// Action creators
export const setRoundNum = num => ({
  type: SET_ROUND,
  num
});

// Reducer
export default (state = 1, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return newState(action.state.roundNum, state);
    case SET_ROUND:
      return action.num;
    default:
      return state;
  }
};
