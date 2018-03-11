export const MAIN = "default";
export const NEW_GAME = "new_game";
export const JOIN_GAME = "join_game";
export const PLAY = "play_game";

const CHANGE_MODE = "change_mode";

// Action creators
export const changeMode = mode => ({
  type: CHANGE_MODE,
  mode
});

export default (state = MAIN, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.mode;
    default:
      return state;
  }
};
