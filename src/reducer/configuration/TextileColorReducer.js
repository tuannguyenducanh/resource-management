import {
  ADD_TEXTILE_COLOR,
  DELETE_TEXTILE_COLOR,
} from "../../action/configuration/TextileColorAction";

const TextileColorReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TEXTILE_COLOR: {
      const color = payload.color;
      return state.concat(color);
    }
    case DELETE_TEXTILE_COLOR: {
      const color = payload.color;
      return state.filter((element) => element !== color);
    }
    default: {
      return state;
    }
  }
};

export default TextileColorReducer;
