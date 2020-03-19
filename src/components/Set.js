import React, { useState } from "react";
import "./Set.scss";

function Set(set) {
  //전역
  const reps = set.reps;

  //로컬
  const [repsCount, setRepsCount] = useState(0);

  const onincreaseReps = () => {
    setRepsCount(repsCount + 1);
  };

  return (
    <>
      <div className="Button" onClick={onincreaseReps}>
        {repsCount}
      </div>
    </>
  );
}

export default Set;
