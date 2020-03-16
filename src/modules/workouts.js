const ADD_WORKOUT = "workouts/ADD_WORKOUT";
const TOGGLE_WORKOUT = "workouts/TOGGLE_WORKOUT";
const REMOVE_WORKOUT = "workouts/REMOVE_WORKOUT";
const ADD_SET = "workouts/ADD_SET";
const ADD_ROUTINE = "workouts/ADD_ROUTINE"

// let nextId = 1;

// const ID = Date.now().toString();
const DATE = Date.now().toString();
const ID = "id";
export const addRoutine = id => ({
  type: ADD_ROUTINE,
  ID: {
    id: ID,
    title: DATE,
    desc: "5x5",
    createdAt: DATE,
    workoutItems: {
    }
  },
})
export const addWorkout = text => ({
  type: ADD_WORKOUT,
  [text]:{
    1:{
      reps:1,
      weight:1
    }
  }
});

export const toggleWorkout = id => ({
  type: TOGGLE_WORKOUT,
  id
});

export const removeWorkout = name => ({
  type: REMOVE_WORKOUT,
  name
});

export const addSet = name => ({
  type: ADD_SET,
  name
});

const initialState = {};

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case ADD_ROUTINE:
      console.log("ADD ROUTINE");
      console.log("state", state);
      return Object.assign(state,action);

    case ADD_WORKOUT:
      console.log("ADD_WORKOUT");
      console.log("action", action);
      console.log("state", state);
      return Object.assign(state.ID.workoutItems,action)      

    case ADD_SET:
      console.log("ADD_SETORKOUT");
      return Object.assign(state.ID.workoutItems.workoutItemName,action)

    case REMOVE_WORKOUT:
      console.log("action", action);
      console.log("state", state);
      console.log(
        "state",
        state[0].ID.workoutItems.filter(name => name !== action.name)
      );
      return state;

    default:
      return state;
  }
}
