import * as mock from "./MockData";

import { mergeCoins } from "../../helpers/Helpers";
import { TAKE_STASH } from "./shared";

export default (state = mock.players, action) => {
  switch (action.type) {
    case TAKE_STASH:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          coins: mergeCoins(state[action.playerId].coins, action.stash)
        }
      };
    default:
      return state;
  }
};
