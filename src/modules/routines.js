//액션 타입 정의
const ADD_ROUTINE = "routines/ADD_ROUTINE"; //루틴추가
const ADD_WORKOUT = "routines/ADD_WORKOUT"; //운동추가
const ADD_SET = "routines/ADD_SET"; //세트추가
const REMOVE_WORKOUT = "routines/REMOVE_WORKOUT"; //운동삭제
const TOGGLE_WORKOUT = "routines/TOGGLE_WORKOUT";

//액션 생성함수 정의
let nextId = 1;

// const ID = Date.now().toString();
// const ID = "id";
export const addRoutine = ID => ({
  type: ADD_ROUTINE,
  [ID]: {
    id: ID,
    title: DATE,
    desc: "5x5",
    createdAt: DATE,
    workoutItems: {}
  }
});
export const addWorkout = (ID, text) => ({
  type: ADD_WORKOUT,
  [ID]: {
    workoutItems: {
      [text]: {
        1: {
          reps: 0,
          weight: 0
        }
      }
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

// 액션 초기함수 정의
const DATE = Date.now().toString();
const initialState = [
  {
    routine: {
      id: DATE,
      title: DATE,
      createdAt: DATE,
      desc: "Description",
      workoutItems: [
        {
          workoutItemName: "workoutItemName",
          sets: [
            {
              set: 1,
              reps: 0,
              weight: 0
            }
          ]
        }
      ]
    }
  }
];
// 리듀서 작성
export default function routines(state = initialState, action) {
  switch (action.type) {
    case ADD_ROUTINE:
      console.log("ADD ROUTINE");
      console.log("action", action);
      console.log("state", state);
      return Object.assign({}, state, action);

    case ADD_WORKOUT:
      console.log("ADD_WORKOUT");
      console.log("action", action);
      console.log("state", state);
      return Object.assign({}, state, action);

    case ADD_SET:
      console.log("ADD_SET");
      return Object.assign({}, state.ID.workoutItems.workoutItemName, action);

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
