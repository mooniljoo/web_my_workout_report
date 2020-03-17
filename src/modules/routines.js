//액션 타입 정의
const ADD_ROUTINE = "routines/ADD_ROUTINE"; //루틴추가
const ADD_WORKOUT = "routines/ADD_WORKOUT"; //운동추가
const ADD_SET = "routines/ADD_SET"; //세트추가
const REMOVE_WORKOUT = "routines/REMOVE_WORKOUT"; //운동삭제

export const addWorkout = text => ({
  type: ADD_WORKOUT,
  text
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
      console.log("ADD_WORKOUT");
      console.log("action", action);
      console.log("state", state);
      //복사해서 나와야 됨 변형시키면 안됨
      return (state[0].routine.workoutItems[0].workoutItemName = action.text);

    default:
      return state;
  }
}
