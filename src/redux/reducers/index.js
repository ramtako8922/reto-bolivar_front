//combinación de reducer
import { combineReducers } from "@reduxjs/toolkit";


import musicReducer from "../slices/music";
import searchReducer from '../slices/search'

export default combineReducers({
   
    music:musicReducer,
    search:searchReducer

})