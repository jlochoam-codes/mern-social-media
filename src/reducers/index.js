import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import imageReducer from "./ImageReducer";

export const reducers = combineReducers({ authReducer, imageReducer });
