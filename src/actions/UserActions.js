import * as userApi from '../api/UserReqs';

export const updateUser = (userId, userData) => async (dispatch) => {
  dispatch({ type: "USER_UPDATE_START" });
  try {
    const { data } = await userApi.updateUser(userId, userData);
    dispatch({ type: "USER_UPDATE_SUCCESS", data: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: "USER_UPDATE_FAIL" });
  }
};
