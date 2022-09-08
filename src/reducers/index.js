import { combineReducers } from "redux";
import postsReducer from "./PostsReducer";
import userReducer from "./UserReducer";

export const reducers = combineReducers({ postsReducer, userReducer });
