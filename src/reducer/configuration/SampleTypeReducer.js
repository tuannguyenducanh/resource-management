import {
  ADD_SAMPLE_TYPE,
  DELETE_SAMPLE_TYPE,
} from "../../action/configuration/SampleTypeAction";

const SampleTypeReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SAMPLE_TYPE: {
      return state.concat(payload);
    }
    case DELETE_SAMPLE_TYPE: {
      const { id } = payload;
      return state.filter((element, elementId) => elementId !== id);
    }
    default: {
      return state;
    }
  }
};

export default SampleTypeReducer;
