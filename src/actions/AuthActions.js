import * as authApi from '../api/AuthReqs';

export const login = (loginData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const { data } = await authApi.login(loginData);
    dispatch({ type: "LOGIN_SUCCESS", data: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: "LOGIN_FAIL" });
  }
};

export const signUp = (signUpData) => async (dispatch) => {
  dispatch({ type: "SIGNUP_START" });
  try {
    const { data } = await authApi.signUp(signUpData);
    dispatch({ type: "SIGNUP_SUCCESS", data: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: "SIGNUP_FAIL" });
  }
};
