const SET_TOAST = "set_toast";
const CLEAR_TOAST = "clear_toast";

// Action creators
export const setToast = toast => ({
  type: SET_TOAST,
  toast
});

export const clearToast = () => ({
  type: CLEAR_TOAST
});

export default (state = "", action) => {
  switch (action.type) {
    case SET_TOAST:
      return action.toast;
    case CLEAR_TOAST:
      return "";
    default:
      return state;
  }
};
