//combinación de reducer
import { combineReducers } from "@reduxjs/toolkit";


import musicReducer from "../slices/music";
import searchReducer from '../slices/search'
import authReducer from "../slices/auth"
export default combineReducers({
   
    music:musicReducer,
    search:searchReducer,
    auth:authReducer


})