import {
  ADD_BACKLOG,
  DELETE_BACKLOG,
  MOVE_TO_TODO,
  DELETE_TODO,
  MOVE_TO_DOING,
  DELETE_DOING,
  MOVE_TO_DONE,
  DELETE_DONE
} from "./action";

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
    case MOVE_TO_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: [
          ...state.todo.slice(0, action.payload),
          ...state.todo.slice(action.payload + 1)
        ]
      };
    case MOVE_TO_DOING:
      return {
        ...state,
        doing: [...state.doing, action.payload]
      };
    case DELETE_DOING:
      return {
        ...state,
        doing: [
          ...state.doing.slice(0, action.payload),
          ...state.doing.slice(action.payload + 1)
        ]
      };

    case MOVE_TO_DONE:
      return {
        ...state,
        done: [...state.done, action.payload]
      };
    case DELETE_DONE:
      return {
        ...state,
        done: [
          ...state.done.slice(0, action.payload),
          ...state.done.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
}
