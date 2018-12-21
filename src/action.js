export const ADD_BACKLOG = "ADD_BACKLOG";
export const DELETE_BACKLOG = "DELETE_BACKLOG";
export const MOVE_TO_TODO = "MOVE_TO_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MOVE_TO_DOING = "MOVE_TO_DOING";
export const DELETE_DOING = "DELETE_DOING";
export const MOVE_TO_DONE = "MOVE_TO_DONE";
export const DELETE_DONE = "DELETE_DONE";

export const addBacklog = data => {
  return {
    type: ADD_BACKLOG,
    payload: data
  };
};

export const deleteBacklog = number => {
  return {
    type: DELETE_BACKLOG,
    payload: number
  };
};

export const moveToTodo = data => {
  return {
    type: MOVE_TO_TODO,
    payload: data
  };
};

export const deleteTodo = number => {
  return {
    type: DELETE_TODO,
    payload: number
  };
};

export const moveToDoing = data => {
  return {
    type: MOVE_TO_DOING,
    payload: data
  };
};

export const deleteDoing = number => {
  return {
    type: DELETE_DOING,
    payload: number
  };
};

export const moveToDone = data => {
  return {
    type: MOVE_TO_DONE,
    payload: data
  };
};

export const deleteDone = number => {
  return {
    type: DELETE_DONE,
    payload: number
  };
};
