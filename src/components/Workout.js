import React from "react";
import Button from "./Button";
import "./Workout.scss";

function Workout({ children }) {
  return (
    <>
      <div className="Workout">
        {children}
        <div className="Buttons">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
}

export default Workout;
