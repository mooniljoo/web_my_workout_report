//액션 타입 정의
// const ADD_ROUTINE = "routines/ADD_ROUTINE"; //루틴추가
const ADD_WORKOUT = "routines/ADD_WORKOUT"; //운동추가
const ADD_SET = "routines/ADD_SET"; //세트추가
const REMOVE_WORKOUT = "routines/REMOVE_WORKOUT"; //운동삭제

//액션 정의
export const addWorkout = text => ({
  type: ADD_WORKOUT,
  text
});

export const removeWorkout = workoutItemNameText => ({
  type: REMOVE_WORKOUT,
  workoutItemNameText
});

export const addSet = workoutItemNameText => ({
  type: ADD_SET,
  workoutItemNameText,
  set: {
    set: 2,
    reps: 0,
    weight: 0
  }
});

// 액션 초기함수 정의
const DATE = Date.now().toString();
const initialState = {
  routine: {
    id: DATE,
    title: DATE,
    createdAt: DATE,
    desc: "Description",
    workoutItems: {
      squat: {
        name: "squat",
        sets: {
          1: {
            set: 1,
            reps: 0,
            weight: 0
          }
        }
      },
      deadlift: {
        name: "deadlift",
        sets: {
          1: {
            set: 1,
            reps: 0,
            weight: 0
          }
        }
      }
    }
  }
};
// 리듀서 작성
export default function routines(state = initialState, action) {
  switch (action.type) {
    case ADD_WORKOUT:
      return {
        routine: {
          ...state.routine,
          workoutItems: {
            ...state.routine.workoutItems,
            [action.text]: {
              1: {
                reps: 0,
                weight: 0
              }
            }
          }
        }
      };

    case REMOVE_WORKOUT:
      console.log("REMOVE_WORKOUT");
      console.log("\taction", action.workoutItemNameText);
      console.log("\tstate", state);
      //복사해서 나와야 됨 변형시키면 안됨
      const new_state_remove = state[0].routine.workoutItems.filter(
        workoutItem =>
          workoutItem.workoutItemName !== action.workoutItemNameText
      );
      const res_remove = new_state_remove;
      console.log("\tnew_state", res_remove);
      return res_remove;

    case ADD_SET:
      console.log("ADD_SET");
      console.log("\taction", action.workoutItemNameText);
      console.log("\tstate", state);
      //복사해서 나와야 됨 변형시키면 안됨
      const new_state_addSet = state.concat();
      const matchedWorkoutItems = state[0].routine.workoutItems.filter(
        workoutItem =>
          workoutItem.workoutItemName === action.workoutItemNameText
      );
      const res_addSet = matchedWorkoutItems[0].sets.concat(action.set);
      console.log("\tnew_state", res_addSet);
      return res_addSet;

    default:
      return state;
  }
}
