import React from "react";
import CounterContainer from "../containers/CounterContainer";
import WorkoutsContainer from "../containers/WorkoutsContainer";

function RoutineItem() {
  return (
    <div>
      <WorkoutsContainer />
      <CounterContainer />
    </div>
  );
}

export default RoutineItem;
