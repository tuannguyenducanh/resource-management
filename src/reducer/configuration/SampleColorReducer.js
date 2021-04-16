import {
  ADD_SAMPLE_COLOR,
  DELETE_SAMPLE_COLOR,
} from "../../action/configuration/SampleColorAction";

const SampleColorReducer = (state = [], action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case ADD_SAMPLE_COLOR: {
      const color = payload.color;
      return state.concat(color);
    }
    case DELETE_SAMPLE_COLOR: {
      const color = payload.color;
      return state.filter((element) => element !== color);
    }
    default: {
      return state;
    }
  }
};

export default SampleColorReducer;
