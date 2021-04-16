export const ADD_SAMPLE_TYPE = "ADD_SAMPLE_TYPE";
export const addSampleType = (id, name, color, size) => ({
  type: ADD_SAMPLE_TYPE,
  payload: {
    id,
    name,
    color,
    size,
  },
});

export const DELETE_SAMPLE_TYPE = "DELETE_SAMPLE_TYPE";
export const deleteSampleType = (id) => ({
  type: DELETE_SAMPLE_TYPE,
  payload: {
    id,
  },
});
