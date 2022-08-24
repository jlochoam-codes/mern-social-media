const imageReducer = (
  state = { imageData: null, loading: false, error: false }, action
) => {
  if (action.type === "IMAGE_START") {
    return { ...state, loading: true, error: false };
  }
  else if (action.type === "IMAGE_SUCCESS") {
    localStorage.setItem("image", JSON.stringify({ ...action?.data }));
    return { ...state, imageData: action?.data, loading: false, error: false };
  }
  else if (action.type === "IMAGE_FAIL") {
    return { ...state, loading: false, error: true };
  }
  else return state;
};

export default imageReducer;
