const userReducer = (
  state = { userData: null, loading: false, error: false }, action
) => {
  if (action.type === "USER_UPDATE_START") {
    return { ...state, loading: true, error: false };
  }
  else if (action.type === "USER_UPDATE_SUCCESS") {
    return { ...state, userData: action.data, loading: false, error: false };
  }
  else if (action.type === "USER_UPDATE_FAIL") {
    return { ...state, loading: false, error: true };
  }
  else return state;
};

export default userReducer;
