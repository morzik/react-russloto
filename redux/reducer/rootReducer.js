import { combineReducers } from '@reduxjs/toolkit'
import controllerReducer from "./controller";
import modalReducer from "./modals";
import user from "./user";


const rootReducer = combineReducers({
  controllerReducer,
  modalReducer,
  user,
});



export default rootReducer;
