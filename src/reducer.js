import { ADD_BACKLOG, DELETE_BACKLOG } from "./action";

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
    case DELETE_BACKLOG:
      return {
        ...state,
        backlog: [
          ...state.backlog.slice(0, action.payload),
          ...state.backlog.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
}
