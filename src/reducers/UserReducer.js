const userReducer = (
  state = { userData: null, loading: false, error: false }, action
) => {
  if (action.type === "LOGIN_START"
    || action.type === "SIGNUP_START"
    || action.type === "USER_UPDATE_START") {
    return { ...state, loading: true, error: false };
  }
  else if (action.type === "LOGIN_SUCCESS"
    || action.type === "SIGNUP_SUCCESS") {
    return { ...state, userData: action?.data, loading: false, error: false };
  }
  else if (action.type === "USER_UPDATE_SUCCESS") {
    return {
      ...state,
      userData: {
        ...state.userData, user: action?.data
      },
      loading: false,
      error: false
    };
  }
  else if (action.type === "LOGIN_FAIL"
    || action.type === "SIGNUP_FAIL"
    || action.type === "USER_UPDATE_FAIL") {
    return { ...state, loading: false, error: true };
  }
  else return state;
};

export default userReducer;
