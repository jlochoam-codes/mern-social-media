const postsReducer = (
  state = { post: null, uploading: false, error: false }, action
) => {
  if (action.type === "UPLOAD_START") {
    return { ...state, uploading: true, error: false };
  }
  else if (action.type === "UPLOAD_SUCCESS") {
    localStorage.setItem("post", JSON.stringify({ ...action.data }));
    return { ...state, post: action.data, uploading: false, error: false };
  }
  else if (action.type === "UPLOAD_FAIL") {
    return { ...state, uploading: false, error: true };
  }
  else return state;
};

export default postsReducer;
