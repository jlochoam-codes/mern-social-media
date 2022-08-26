import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postsReducer from "./PostsReducer";

export const reducers = combineReducers({ authReducer, postsReducer });
