import * as uploadApi from '../api/UploadReqs';

export const uploadImage = (imageData) => async (dispatch) => {
  try {
    await uploadApi.uploadImage(imageData);
  } catch (err) {
    console.error(err);
  }
};

export const uploadPost = (postData) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await uploadApi.uploadPost(postData);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
