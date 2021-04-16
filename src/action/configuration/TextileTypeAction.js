export const ADD_TEXTILE_TYPE = "ADD_TEXTILE_TYPE";
export const addTextileType = (id, name, color) => ({
  type: ADD_TEXTILE_TYPE,
  payload: {
    id,
    name,
    color,
  },
});

export const DELETE_TEXTILE_TYPE = "DELETE_TEXTILE_TYPE";
export const deleteTextileType = (id) => ({
  type: DELETE_TEXTILE_TYPE,
  payload: {
    id,
  },
});
