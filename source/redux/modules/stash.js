import {
  ADD_TO_STASH,
  REMOVE_FROM_STASH,
  CLEAR_STASH,
  TAKE_STASH
} from "./shared";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_STASH:
      return [...state, { type: action.coinType }];
    case REMOVE_FROM_STASH:
      return state.filter((_, idx) => idx !== action.index);
    case CLEAR_STASH:
    case TAKE_STASH:
      return [];
    default:
      return state;
  }
};
