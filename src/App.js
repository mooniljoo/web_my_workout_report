import React from "react";
import "./App.scss";
import CounterContainer from "./containers/CounterContainer";
import WorkoutsContainer from "./containers/WorkoutsContainer";

function App() {
  return (
    <div>
      <WorkoutsContainer />
      <CounterContainer />
    </div>
  );
}

export default App;
