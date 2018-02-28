import { mergeCoins, getCoinsLeft } from "../../helpers/Helpers";
import { TAKE_STASH, BUY_CARD, UPDATE_STATE, newState } from "./shared";

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return newState(action.state.players, state);
    case TAKE_STASH:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          coins: mergeCoins(state[action.playerId].coins, action.stash)
        }
      };
    case BUY_CARD:
      return {
        ...state,
        [action.player.id]: {
          ...action.player,
          cards: [...action.player.cards, action.cardId],
          coins: getCoinsLeft(action.player.coins, action.cardId, action.player)
        }
      };
    default:
      return state;
  }
};
