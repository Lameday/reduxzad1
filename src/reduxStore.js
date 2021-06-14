import { combineReducers } from "redux";
import usersReducer from "./Users/redux";
import messageReducer from "./Message/Message"

const reduxStore = combineReducers({
  message: messageReducer,
  users: usersReducer
});

export default reduxStore;
