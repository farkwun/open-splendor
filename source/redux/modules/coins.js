import * as mock from "./MockData";
import { ADD_TO_STASH, REMOVE_FROM_STASH, CLEAR_STASH } from "./shared";

export default (state = mock.coins, action) => {
  switch (action.type) {
    case ADD_TO_STASH:
      return { ...state, [action.coinType]: state[action.coinType] - 1 };
    case REMOVE_FROM_STASH:
      return { ...state, [action.coinType]: state[action.coinType] + 1 };
    case CLEAR_STASH:
      return action.stash.reduce(
        (newCoins, { type }) => ((newCoins[type] += 1), newCoins),
        state
      );
    default:
      return state;
  }
};
