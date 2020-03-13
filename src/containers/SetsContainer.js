import React from "react";
import Set from "../components/Set";

function SetContainer(_sets) {
  return (
    <div>
      {_sets.map(set => (
        <Set key={set.id} />
      ))}
    </div>
  );
}

export default SetContainer;
