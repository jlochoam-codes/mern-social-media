const authReducer = (
  state = { authData: null, loading: false, error: false }, action
) => {
  if (action.type === "LOGIN_START" || action.type === "SIGNUP_START") {
    return { ...state, loading: true, error: false };
  }
  else if (action.type === "LOGIN_SUCCESS" || action.type === "SIGNUP_SUCCESS") {
    localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
    return { ...state, authData: action?.data, loading: false, error: false };
  }
  else if (action.type === "LOGIN_FAIL" || action.type === "SIGNUP_FAIL") {
    return { ...state, loading: false, error: true };
  }
  else return state;
};

export default authReducer;
