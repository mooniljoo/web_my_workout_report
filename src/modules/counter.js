const SET_NUMBER = "counter/SET_NUMBER";
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const setNumber = number => ({ type: SET_NUMBER, number });
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const iniitialState = {
  number: 0,
  diff: 1,
  unit: "kg"
};

export default function counter(state = iniitialState, action) {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...state,
        number: action.number
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}
