const TOGGLE_TUTORIAL = "toggle_tutorial";

// Action creators
export const toggleTutorial = () => ({ type: TOGGLE_TUTORIAL });

export default (state = true, action) => {
  switch (action.type) {
    case TOGGLE_TUTORIAL:
      return !state;
    default:
      return state;
  }
};
