import React from "react";
import SetList from "../components/SetList";
import { useSelector, useDispatch } from "react-redux";

function SetContainer({ sets }) {
  console.log(sets);
  return <SetList sets={sets} />;
}

export default SetContainer;
