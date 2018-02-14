export const ADD_TO_STASH = "add_to_stash";
export const REMOVE_FROM_STASH = "remove_from_stash";
export const CLEAR_STASH = "clear_stash";
export const TAKE_STASH = "take_stash";
export const BUY_CARD = "buy_card";

// Action creators
export const resetStash = stash => ({
  type: CLEAR_STASH,
  stash
});

export const addCoinToStash = coinType => ({
  type: ADD_TO_STASH,
  coinType
});

export const removeCoinFromStash = (coinType, index) => ({
  type: REMOVE_FROM_STASH,
  coinType,
  index
});

export const takeCoinsFromStash = (playerId, stash) => ({
  type: TAKE_STASH,
  playerId,
  stash
});

export const buyCard = (card, player, levelId, cards) => ({
  type: BUY_CARD,
  card,
  cards,
  player,
  levelId
});
