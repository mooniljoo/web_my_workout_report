import { combineReducers } from "redux";
import counter from "./counter";
import workouts from "./workouts";

const rootReducer = combineReducers({
  counter,
  workouts
});

export default rootReducer;
