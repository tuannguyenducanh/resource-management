import {
  ADD_TEXTILE_TYPE,
  DELETE_TEXTILE_TYPE,
} from "../../action/configuration/TextileTypeAction";

const TextileColorReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TEXTILE_TYPE: {
      return state.concat(payload);
    }
    case DELETE_TEXTILE_TYPE: {
      const { id } = payload;
      return state.filter((element, elementId) => elementId !== id);
    }
    default: {
      return state;
    }
  }
};

export default TextileColorReducer;
