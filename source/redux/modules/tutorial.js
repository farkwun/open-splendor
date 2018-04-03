const SET_TUTORIAL = "set_tutorial";
const SHOW_TUTORIAL = "show_tutorial";
const HIDE_TUTORIAL = "hide_tutorial";
const RESET_TUTORIAL = "reset_tutorial";

const header = "Welcome to Splendor!";
const body = "Hover over elements for more information!";

// Action creators
export const setTutorial = (header, body) => ({
  type: SET_TUTORIAL,
  header,
  body
});

export const showTutorial = () => ({ type: SHOW_TUTORIAL });

export const hideTutorial = () => ({ type: HIDE_TUTORIAL });

export const resetTutorial = () => ({ type: RESET_TUTORIAL });

export default (state = { show: true, header, body }, action) => {
  switch (action.type) {
    case SET_TUTORIAL:
      return {
        ...state,
        header: action.header,
        body: action.body
      };
    case SHOW_TUTORIAL:
      return {
        ...state,
        show: true
      };
    case HIDE_TUTORIAL:
      return {
        ...state,
        show: false
      };
    case RESET_TUTORIAL:
      return {
        ...state,
        header,
        body
      };
    default:
      return state;
  }
};
