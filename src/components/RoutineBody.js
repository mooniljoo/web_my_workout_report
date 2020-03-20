import React, { useState } from "react";
import CounterContainer from "../containers/CounterContainer";
import WorkoutListContainer from "../containers/WorkoutListContainer";
import styled, { css } from "styled-components";
import { MdArrowBack, MdCheck } from "react-icons/md";

function TextWorkoutListBlock({ workoutItem }) {
  return (
    <ul>
      <TextWorkoutList>
        <div className="name">{workoutItem.name}</div>
        {Object.values(workoutItem.sets).map(set => (
          <div className="set">
            <span>{set.set}set</span>
            <span>{set.weight}kg</span>
            <span>{set.reps}reps</span>
          </div>
        ))}
      </TextWorkoutList>
    </ul>
  );
}

function RoutineBody({ routine }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };
  const closePop = () => {
    setOpen(false);
  };
  return (
    <>
      <WorkoutListBlock>
        <WorkoutListContainer routine={routine} />
        <CounterContainer />
      </WorkoutListBlock>
      {open && (
        <DarkBackground>
          <Pop>
            <Button onClick={closePop}>X</Button>
            <Head>
              <div>Today's Routine</div>
            </Head>
            <Body>
              <div>{routine.title}</div>
              <div>{routine.desc}</div>
              {Object.values(routine.workoutItems).map((workoutItem, index) => (
                <TextWorkoutListBlock key={index} workoutItem={workoutItem} />
              ))}
            </Body>
          </Pop>
        </DarkBackground>
      )}
      <CircleButton onClick={onToggle}>
        {open ? <MdArrowBack /> : <MdCheck />}
      </CircleButton>
    </>
  );
}
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  top: 0;

  width: 50px;
  height: 50px;
  transform: translate(25px, -25px);
  border-radius: 50%;

  background-color: #fa5252;
  color: #fff;

  cursor: pointer;
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 98;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;
const TextWorkoutList = styled.li`
  .name {
    font-size: 20px;
    font-weight: bold;
  }
  .set {
    font-size: 18px;
  }
`;
const Pop = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  max-width: 512px;
  height: 600px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.2);

  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-bottom: auto;

  font-size: 24px;
  color: #343a40;
`;
const Head = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;
const Body = styled.div`
  height: 100%;
  overflow-y: auto;
  /* ●●●●●●●스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const WorkoutListBlock = styled.div`
  flex: 1;
  padding-bottom: 100px;
  overflow-y: auto;
  padding-left: 32px;
  padding-right: 32px;
`;

const CircleButton = styled.button`
  display: flex;
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 9;
  cursor: pointer;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
export default RoutineBody;
