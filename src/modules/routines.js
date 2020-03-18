//액션 타입 정의
const ADD_ROUTINE = "routines/ADD_ROUTINE"; //루틴추가
const ADD_WORKOUT = "routines/ADD_WORKOUT"; //운동추가
const ADD_SET = "routines/ADD_SET"; //세트추가
const REMOVE_WORKOUT = "routines/REMOVE_WORKOUT"; //운동삭제

//액션 정의
export const addWorkout = text => ({
  type: ADD_WORKOUT,
  workoutItem:{
    workoutItemName: text,
    sets: [
      {
        set: 1,
        reps: 0,
        weight: 0
      }
    ]
  }
});
export const removeWorkout = workoutItemNameText => ({
  type: REMOVE_WORKOUT,
  workoutItemNameText,
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
    case ADD_WORKOUT:
      // console.log("ADD_WORKOUT");
      // console.log("\taction", action);
      // console.log("\tstate", state);
      //복사해서 나와야 됨 변형시키면 안됨
      const new_state_add = state.concat()
      new_state_add[0].routine.workoutItems = state[0].routine.workoutItems.concat(action.workoutItem)
      const res_add = new_state_add
      // console.log("\tnew_state",res_add)
      return res_add
      
    case REMOVE_WORKOUT:
      console.log("REMOVE_WORKOUT");
      console.log("\taction", action.workoutItemNameText);
      console.log("\tstate", state);
      //복사해서 나와야 됨 변형시키면 안됨
      const new_state_remove = state.concat()
      new_state_remove[0].routine.workoutItems.filter(workoutItem => workoutItem.workoutItemName !== action.workoutItemNameText)
      const res_remove = new_state_remove
      console.log("\tnew_state",res_remove)
      return res_remove

    default:
      return state;
  }
}
