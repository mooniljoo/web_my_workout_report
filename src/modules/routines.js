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

export const removeWorkout = text => ({
  type: REMOVE_WORKOUT,
  text
});

//각 운동마다 추가되지 않고 전체에서 추가 됨
//let nextSet = 1;
export const addSet = (text, nextSet) => ({
  type: ADD_SET,
  text,
  nextSet
  // newSet: { [++nextSet]: { set: nextSet, reps: 0, weight: 0 } }
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
          // 2: {
          //   set: 2,
          //   reps: 0,
          //   weight: 0
          // }
        }
      },
      deadlift: {
        name: "bench press",
        sets: {
          1: {
            set: 1,
            reps: 0,
            weight: 0
          }
          // 2: {
          //   set: 2,
          //   reps: 0,
          //   weight: 0
          // }
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
              name: [action.text],
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

    case REMOVE_WORKOUT:
      const matchedWorkoutItems = Object.keys(state.routine.workoutItems)
        .filter(key => key !== action.text)
        .reduce((obj, key) => {
          obj[key] = state.routine.workoutItems[key];
          return obj;
        }, {});
      console.log("REMOVE_WORKOUT");
      console.log("\trest items:", matchedWorkoutItems);

      return {
        routine: {
          ...state.routine,
          workoutItems: {
            ...matchedWorkoutItems
          }
        }
      };

    case ADD_SET:
      console.log("ADD_SET", action.text, action.nextSet);
      return {
        routine: {
          ...state.routine,
          workoutItems: {
            ...state.routine.workoutItems,
            [action.text]: {
              ...state.routine.workoutItems[action.text],
              sets: {
                ...state.routine.workoutItems[action.text].sets,
                [action.nextSet]: {
                  set: action.nextSet,
                  reps: 0,
                  weight: 0
                }
                // ...action.newSet
              }
            }
          }
        }
      };

    default:
      return state;
  }
}
