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
