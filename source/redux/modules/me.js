const SET_ME = "set_me";

// Action creators
export const setMe = username => ({
  type: SET_ME,
  username
});

export default (state = "", action) => {
  switch (action.type) {
    case SET_ME:
      return action.username;
    default:
      return state;
  }
};
