import React from "react";
import "./App.scss";
import Workout from "./components/Workout";
import SetterNav from "./components/SetterNav";

function App() {
  return (
    <div className="App">
      <main className="MWR-wrapper">
        <Workout>Biceps Curl</Workout>
        <Workout>Triceps Curl</Workout>
        <Workout>Cable Push Down</Workout>
        <Workout>Cable Rope Down</Workout>
        <Workout>Half-Squat</Workout>
        <Workout>Full-Squat</Workout>
        <Workout>Bench Press</Workout>
        <Workout>Over Head Press</Workout>
        <Workout>Rumanian Deadlift</Workout>
        <Workout>Conventional Deadlift</Workout>
        <Workout>Pendlay Row</Workout>
        <Workout>Babel Row</Workout>
      </main>
      <SetterNav></SetterNav>
    </div>
  );
}

export default App;
