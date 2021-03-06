const SET_TOAST = "set_toast";
const CLEAR_TOAST = "clear_toast";

// Action creators
const setToast = toastText => ({
  type: SET_TOAST,
  toastText
});

const clearToast = () => ({
  type: CLEAR_TOAST
});

// Thunks
export const toast = (text, ms) => {
  return (dispatch, getState) => {
    dispatch(setToast(text));
    setTimeout(() => dispatch(clearToast()), ms);
  };
};

export default (state = { showToast: false, toastText: "" }, action) => {
  switch (action.type) {
    case SET_TOAST:
      return {
        showToast: true,
        toastText: action.toastText
      };
    case CLEAR_TOAST:
      return {
        showToast: false,
        toastText: ""
      };
    default:
      return state;
  }
};
