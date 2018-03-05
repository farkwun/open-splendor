const START_TOAST = "start_toast";
const STOP_TOAST = "stop_toast";

// Action creators
export const startToast = () => ({
  type: START_TOAST
});

export const stopToast = () => ({
  type: STOP_TOAST
});

export default (state = false, action) => {
  switch (action.type) {
    case START_TOAST:
      return true;
    case STOP_TOAST:
      return false;
    default:
      return state;
  }
};
