import * as authApi from '../api/AuthReqs';

export const login = (loginData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const { response } = await authApi.login(loginData);
    dispatch({ type: "LOGIN_SUCCESS", data: response });
  } catch (err) {
    console.error(err);
    dispatch({ type: "LOGIN_FAIL" });
  }
};

export const signUp = (signUpData) => async (dispatch) => {
  dispatch({ type: "SIGNUP_START" });
  try {
    const { response } = await authApi.signUp(signUpData);
    dispatch({ type: "SIGNUP_SUCCESS", data: response });
  } catch (err) {
    console.error(err);
    dispatch({ type: "SIGNUP_FAIL" });
  }
};
