import React, { useState } from "react";
import "./Set.scss";

function Set() {
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
