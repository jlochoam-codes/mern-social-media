import * as uploadApi from '../api/UploadReqs';

export const uploadImage = (imageData) => async (dispatch) => {
  try {
    await uploadApi.uploadImage(imageData);
  } catch (err) {
    console.error(err);
  }
};
