export const ADD_TEXTILE_COLOR = "ADD_TEXTILE_COLOR";
export const addColor = (color) => ({
  type: ADD_TEXTILE_COLOR,
  payload: {
    color,
  },
});

export const DELETE_TEXTILE_COLOR = "DELETE_TEXTILE_COLOR";
export const deleteColor = (color) => ({
  type: DELETE_TEXTILE_COLOR,
  payload: {
    color,
  },
});
