const FLIP_LOADING = "flip_loading";

// Action creators
export const toggleLoadState = () => ({
  type: FLIP_LOADING
});

export default (state = false, action) => {
  switch (action.type) {
    case FLIP_LOADING:
      return !state;
    default:
      return state;
  }
};
