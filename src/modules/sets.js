const ADD_SET = "sets/ADD_SET";
const REMOVE_SET = "sets/REMOVE_WORKOUT";

let nextId = 1;
export const onAddSet = text => ({
  type: ADD_SET,
  set: {
    id: nextId++,
    reps: 0
  }
});

export const onRemoveSet = id => ({
  type: REMOVE_SET,
  id
});

const initialState = [];

export default function buttons(state = initialState, action) {
  switch (action.type) {
    case ADD_SET:
      return state.concat(action.set);
    case REMOVE_SET:
      return state.filter(set => set.id !== action.id);
    default:
      return state;
  }
}
