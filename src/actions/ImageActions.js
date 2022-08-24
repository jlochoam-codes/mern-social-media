import * as imageApi from '../api/ImageReqs';

export const uploadImage = (image) => async (dispatch) => {
  dispatch({ type: "IMAGE_START" });
  try {
    const { data } = await imageApi.uploadImage(image);
    dispatch({ type: "IMAGE_SUCCESS", data: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: "IMAGE_FAIL" });
  }
};
