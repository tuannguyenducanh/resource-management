import {
  ADD_TEXTILE_PRICING,
  DELETE_TEXTILE_PRICING,
} from "../../action/configuration/TextilePricingAction";

const SamplePricingReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TEXTILE_PRICING: {
      return state.concat(payload);
    }
    case DELETE_TEXTILE_PRICING: {
      const { id } = payload;
      return state.filter((element, elementId) => elementId !== id);
    }
    default: {
      return state;
    }
  }
};

export default SamplePricingReducer;
