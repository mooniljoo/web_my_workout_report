const ADD_WORKOUT = "workouts/ADD_WORKOUT";
const TOGGLE_WORKOUT = "workouts/TOGGLE_WORKOUT";
const REMOVE_WORKOUT = "workouts/REMOVE_WORKOUT";

let nextId = 1;
export const addWorkout = text => ({
  type: ADD_WORKOUT,
  workout: {
    id: nextId++,
    text,
    desc: "",
    reps: 0,
    set: 0
  }
});

export const toggleWorkout = id => ({
  type: TOGGLE_WORKOUT,
  id
});

export const removeWorkout = id => ({
  type: REMOVE_WORKOUT,
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
    case REMOVE_WORKOUT:
      return state.filter(workout => workout.id !== action.id);
    default:
      return state;
  }
}
