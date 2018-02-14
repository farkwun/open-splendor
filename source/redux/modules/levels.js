import * as mock from "./MockData";
import { updateIn } from "../../helpers/Helpers";

import { BUY_CARD } from "./shared";

export default (state = mock.levels, action) => {
  switch (action.type) {
    case BUY_CARD:
      return updateIn(
        state,
        level => level.id === action.levelId,
        level => {
          const rowCards = level.rowCards.map(
            rowCardId => (rowCardId === action.card.id ? null : rowCardId)
          );
          return { ...level, rowCards };
        }
      );
    default:
      return state;
  }
};
