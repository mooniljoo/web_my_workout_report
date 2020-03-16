import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdAddBox } from "react-icons/md";
import WorkoutList from "./WorkoutList";
import styled from "styled-components";

function Workouts({ workouts, onToggle, onRemove }) {
  return (
    <div>
      <WorkoutList
        workouts={workouts}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
}

export default React.memo(Workouts);
