import { startLoad, stopLoad } from "./loading";

export const ADD_TO_STASH = "add_to_stash";
export const REMOVE_FROM_STASH = "remove_from_stash";
export const CLEAR_STASH = "clear_stash";
export const TAKE_STASH = "take_stash";
export const BUY_CARD = "buy_card";

export const UPDATE_STATE = "update_state";

// Action creators
export const updateState = state => ({
  type: UPDATE_STATE,
  state
});

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

export const buyCard = (cardId, player, levelId) => ({
  type: BUY_CARD,
  cardId,
  player,
  levelId
});

// Thunks
const URI = "http://localhost:5000/new";

export const getNewGame = name => {
  return (dispatch, getState) => {
    dispatch(startLoad());

    const body = { user: name };

    const options = {
      method: "POST",
      mode: "cors"
    };

    options.body = JSON.stringify(body);

    fetch(URI, options)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        dispatch(updateState(json));
        dispatch(stopLoad());
      })
      .catch(error => {
        console.log("Error is: ", error);
        dispatch(stopLoad());
      });
  };
};

// Helpers
export const newState = (next, curr) => (next !== undefined ? next : curr);
