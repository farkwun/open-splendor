import { startLoad, stopLoad } from "./loading";
import { setMe } from "./me";
import { toast } from "./toast";
import { changeMode, PLAY } from "./mode";

export const ADD_TO_STASH = "add_to_stash";
export const REMOVE_FROM_STASH = "remove_from_stash";
export const CLEAR_STASH = "clear_stash";
export const TAKE_STASH = "take_stash";
export const BUY_CARD = "buy_card";

export const UPDATE_STATE = "update_state";

const STOP_POLL = "stop_poll";

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

// Thunks
const URI = "api/";

/* POST TYPES */
const NEW_GAME = "new";
const JOIN_GAME = "join";
const MOVE = "move";
const ACTIVATE = "activate";
const UPDATE = "update";

/* ENDPOINTS */
const NEW = "new";
const JOIN = "join";
const GAME = "game";

/* REQUEST TYPES */
const POST = "POST";
const GET = "GET";

/* MOVE TYPES */
const MOVE_BUY_CARD = "buy_card";
const MOVE_BUY_RESERVED_CARD = "buy_reserved_card";
const MOVE_RESERVE_CARD = "reserve_card";
const MOVE_TAKE_COINS = "take_coins";

const makeRequest = (dispatch, load) => (
  method,
  type,
  endpoint,
  body,
  action
) => {
  if (load) {
    dispatch(startLoad());
  }

  const options = {
    method,
    mode: "cors",
    body: method === POST ? JSON.stringify({ ...body, type }) : undefined
  };

  console.log(options);

  if (method === GET) {
    console.log(makeQueryString(body));
    endpoint = endpoint.concat(makeQueryString(body));
  }

  console.log(URI.concat(endpoint));

  fetch(URI.concat(endpoint), options)
    .then(response => {
      console.log(response.status);
      if (!response.ok) {
        dispatch(
          toast(
            "Error! Server replied " +
              response.status +
              ". " +
              response.statusText,
            2000
          )
        );
        return;
      }
      return response.json();
    })
    .then(json => {
      console.log(json);
      dispatch(stopLoad());
      action(json);
    })
    .catch(error => {
      console.log("Error is: ", error);
      dispatch(stopLoad());
    });
};

const pollTime = 1000;

let interval;

export const stopPoll = () => dispatch => {
  clearInterval(interval);
  return dispatch({ type: STOP_POLL });
};

export const pollGameState = roomId => {
  return (dispatch, getState) => {
    clearInterval(interval);
    interval = setInterval(
      () =>
        makeRequest(dispatch, false)(GET, UPDATE, GAME, { roomId }, json => {
          dispatch(updateState(json));
          if (
            isMyTurn(getState(), json.playOrder, json.playIndex) ||
            gameOver(getState())
          ) {
            dispatch(toast("It's your turn!", 7000));
            dispatch(stopPoll());
          }
        }),
      pollTime
    );
  };
};

export const getNewGame = name => {
  return (dispatch, getState) => {
    makeRequest(dispatch, true)(POST, NEW_GAME, NEW, { user: name }, json => {
      dispatch(setMe(name));
      dispatch(updateState(json));
      dispatch(changeMode(PLAY));
      dispatch(pollGameState(getState().roomId));
    });
  };
};

export const joinGame = (name, roomId) => {
  return (dispatch, getState) => {
    makeRequest(dispatch, true)(
      POST,
      JOIN_GAME,
      JOIN,
      { user: name, roomId },
      json => {
        dispatch(setMe(name));
        dispatch(updateState(json));
        dispatch(changeMode(PLAY));
        dispatch(pollGameState(getState().roomId));
      }
    );
  };
};

export const activateGame = roomId => {
  return (dispatch, getState) => {
    makeRequest(dispatch, true)(POST, ACTIVATE, GAME, { roomId }, json => {
      dispatch(startLoad());
    });
  };
};

const makeMove = (state, obj, move) => {
  return {
    ...obj,
    move,
    type: MOVE,
    me: state.me,
    roomId: state.roomId
  };
};

export const takeCoinsFromStash = stash => {
  return (dispatch, getState) => {
    makeRequest(dispatch, true)(
      POST,
      MOVE,
      GAME,
      makeMove(getState(), { stash }, MOVE_TAKE_COINS),
      json => {
        dispatch(resetStash(stash));
        dispatch(startLoad());
        dispatch(pollGameState(getState().roomId));
      }
    );
  };
};

export const buyCard = card => {
  return (dispatch, getState) => {
    makeRequest(dispatch, true)(
      POST,
      MOVE,
      GAME,
      makeMove(getState(), { card }, MOVE_BUY_CARD),
      json => {
        dispatch(startLoad());
        dispatch(pollGameState(getState().roomId));
      }
    );
  };
};

export const reserveCard = card => {
  return (dispatch, getState) => {
    makeRequest(dispatch, true)(
      POST,
      MOVE,
      GAME,
      makeMove(getState(), { card }, MOVE_RESERVE_CARD),
      json => {
        dispatch(startLoad());
        dispatch(pollGameState(getState().roomId));
      }
    );
  };
};

export const buyReservedCard = card => {
  return (dispatch, getState) => {
    makeRequest(dispatch, true)(
      POST,
      MOVE,
      GAME,
      makeMove(getState(), { card }, MOVE_BUY_RESERVED_CARD),
      json => {
        dispatch(startLoad());
        dispatch(pollGameState(getState().roomId));
      }
    );
  };
};
// Helpers
export const newState = (next, curr) => (next !== undefined ? next : curr);

const makeQueryString = dict =>
  Object.keys(dict).reduce(
    (qs, key) => qs.concat(key.concat("=".concat(dict[key]))),
    "?"
  );

const isMyTurn = (state, playOrder, playIndex) =>
  state.active && state.me === playOrder[playIndex];

const gameOver = state => state.winner !== "";
