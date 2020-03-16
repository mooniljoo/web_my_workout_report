const ADD_WORKOUT = "workouts/ADD_WORKOUT";
const TOGGLE_WORKOUT = "workouts/TOGGLE_WORKOUT";
const REMOVE_WORKOUT = "workouts/REMOVE_WORKOUT";
const ADD_SET = "workouts/ADD_SET";

// let nextId = 1;

// const ID = Date.now().toString();
const DATE = Date.now().toString();
const ID = "id";
export const addWorkout = text => ({
  type: ADD_WORKOUT,
  ID: {
    id: ID,
    title: DATE,
    desc: "5x5",
    createdAt: DATE,
    workoutItems: [
      {
        name: text,
        counts: [{ set: 1, reps: 10, weight: 10 }]
      }
    ]
  }

  // [ID]: {
  //   id: ID,
  //   title: DATE,
  //   desc: "5x5",
  //   createdAt: DATE,
  //   workoutItems: [
  //     {
  //       name: text,
  //       counts: [
  //         { set: 1, reps: 10, weight: 10 },
  //         { set: 2, reps: 10, weight: 50 },
  //         { set: 3, reps: 10, weight: 70 },
  //         { set: 4, reps: 5, weight: 80 },
  //         { set: 5, reps: 5, weight: 90 },
  //         { set: 6, reps: 5, weight: 100 },
  //         { set: 7, reps: 5, weight: 100 }
  //       ]
  //     },
  //     {
  //       name: "ConventionalDeadLift",
  //       counts: [
  //         { set: 1, reps: 10, weight: 10 },
  //         { set: 2, reps: 10, weight: 50 },
  //         { set: 3, reps: 10, weight: 70 },
  //         { set: 4, reps: 5, weight: 80 },
  //         { set: 5, reps: 5, weight: 90 },
  //         { set: 6, reps: 5, weight: 100 },
  //         { set: 7, reps: 5, weight: 100 }
  //       ]
  //     },
  //     {
  //       name: "OverHeadPress",
  //       counts: [
  //         { set: 1, reps: 10, weight: 10 },
  //         { set: 2, reps: 10, weight: 10 }
  //       ]
  //     }
  //   ]
  // }
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

const initialState = [];

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case ADD_WORKOUT:
      // console.log("action", action);
      // console.log("state", state);
      return state.concat(action);
    case TOGGLE_WORKOUT:
      return state.map(workout =>
        workout.id === action.id ? { ...workout, done: !workout.done } : workout
      );
    case REMOVE_WORKOUT:
      console.log("action", action);
      console.log("state", state);
      console.log(
        "state",
        state[0].ID.workoutItems.filter(name => name !== action.name)
      );
      return state;
    case ADD_SET:
      return state.concat(action);
    default:
      return state;
  }
}
