import { updateIn } from "../../helpers/Helpers";

import { BUY_CARD, UPDATE_STATE, newState } from "./shared";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return newState(action.state.levels, state);
    case BUY_CARD:
      return updateIn(
        state,
        level => level.id === action.levelId,
        level => {
          const rowCards = level.rowCards.map(
            rowCardId => (rowCardId === action.cardId ? null : rowCardId)
          );
          return { ...level, rowCards };
        }
      );
    default:
      return state;
  }
};
