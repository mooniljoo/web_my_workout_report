import React from "react";
import styled, { css } from "styled-components";
import CreateWorkoutItem from "./CreateWorkoutItem";
//import { MdEdit } from "react-icons/md";

function RoutineHead({ routine }) {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <RoutineHeadBlock>
      <h2>{routine.title}</h2>
      <h2>{routine.desc}</h2>
      <h2>
        {dateString}
        <span className="day">{dayName}</span>
      </h2>
      <CreateWorkoutItem onCreate={routine} />
    </RoutineHeadBlock>
  );
}

const RoutineHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h2 {
    margin: 0;
    font-size: 2rem;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Modify = styled.span`
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  &:hover {
    border-bottom: 1px solid #343a40;
  }
  svg {
    width: 18px;
    height: 100%;
    fill: #343a40;
  }
  ${props =>
    props.open &&
    css`
      border-bottom: 1px solid #343a40;
      &:hover {
        border-bottom: 1px solid #343a40;
      }
      &:active {
        border-bottom: 1px solid rgba(255, 255, 255, 0);
        opacity: 0.8;
      }
    `}
`;

export default RoutineHead;
