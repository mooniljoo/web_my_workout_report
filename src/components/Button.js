import React, { useState } from "react";
import "./Button.scss";

function Button() {
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

export default Button;
