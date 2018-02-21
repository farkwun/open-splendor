const START_LOAD = "start_loading";
const STOP_LOAD = "stop_loading";

// Action creators
export const startLoad = () => ({
  type: START_LOAD
});

export const stopLoad = () => ({
  type: STOP_LOAD
});

export default (state = false, action) => {
  switch (action.type) {
    case START_LOAD:
      return true;
    case STOP_LOAD:
      return false;
    default:
      return state;
  }
};
