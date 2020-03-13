const ADD_WORKOUT = "workouts/ADD_WORKOUT";
const TOGGLE_WORKOUT = "workouts/TOGGLE_WORKOUT";

let nextId = 1;
export const addWorkout = text => ({
  type: ADD_WORKOUT,
  workout: {
    id: nextId++,
    text
  }
});

export const toggleWorkout = id => ({
  type: TOGGLE_WORKOUT,
  id
});

const initialState = [];

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case ADD_WORKOUT:
      return state.concat(action.workout);
    case TOGGLE_WORKOUT:
      return state.map(workout =>
        workout.id === action.id ? { ...workout, done: !workout.done } : workout
      );
    default:
      return state;
  }
}
