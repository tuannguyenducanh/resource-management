import {
  ADD_SAMPLE_PRICING,
  DELETE_SAMPLE_PRICING,
} from "../../action/configuration/SamplePricingAction";

const SamplePricingReducer = (state = [], action) => {
  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case ADD_SAMPLE_PRICING: {
      return state.concat(payload);
    }
    case DELETE_SAMPLE_PRICING: {
      const { id } = payload;
      return state.filter((element, elementId) => elementId !== id);
    }
    default: {
      return state;
    }
  }
};

export default SamplePricingReducer;
