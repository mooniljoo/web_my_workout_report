import React from "react";
import Set from "./Set";

function SetList({ sets }) {
  return (
    <>
      {sets.map((set, index) => (
        <Set key={index} set={set} />
      ))}
    </>
  );
}

export default SetList;
