import { ADD_BACKLOG } from "./action";

const initialState = {
  backlog: [],
  todo: [],
  doing: [],
  done: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BACKLOG:
      return {
        ...state,
        backlog: [...state.backlog, action.payload]
      };
    default:
      return state;
  }
}
