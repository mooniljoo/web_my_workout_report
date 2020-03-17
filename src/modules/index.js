import { combineReducers } from "redux";
import counter from "./counter";
import routines from "./routines";

const rootReducer = combineReducers({
  //reucer 합치기
  counter,
  routines
});

export default rootReducer;
