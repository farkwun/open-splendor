import { replenishedCoins, coinsSpent } from "../../helpers/Helpers";
import {
  ADD_TO_STASH,
  REMOVE_FROM_STASH,
  CLEAR_STASH,
  BUY_CARD,
  UPDATE_STATE,
  newState
} from "./shared";

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return newState(action.state.coins, state);
    case ADD_TO_STASH:
      return { ...state, [action.coinType]: state[action.coinType] - 1 };
    case REMOVE_FROM_STASH:
      return { ...state, [action.coinType]: state[action.coinType] + 1 };
    case BUY_CARD:
      return replenishedCoins(coinsSpent(action.cardId, action.player), state);
    default:
      return state;
  }
};
