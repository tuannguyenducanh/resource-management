export const ADD_SAMPLE_COLOR = "ADD_SAMPLE_COLOR";
export const addColor = (color) => ({
  type: ADD_SAMPLE_COLOR,
  payload: {
    color,
  },
});

export const DELETE_SAMPLE_COLOR = "DELETE_SAMPLE_COLOR";
export const deleteColor = (color) => ({
  type: DELETE_SAMPLE_COLOR,
  payload: {
    color,
  },
});
