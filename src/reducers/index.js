import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postsReducer from "./PostsReducer";
import userReducer from "./UserReducer";

export const reducers = combineReducers({ authReducer, postsReducer, userReducer });
