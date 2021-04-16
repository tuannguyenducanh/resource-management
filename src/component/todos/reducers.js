import { CREATE_TODO, REMOVE_TODO } from "./actions";

const TodoReducer = (
  state = [
    { id: 1, sample: "Cổ vuông", price: 285000, color: "Hồng", size: 1 },
  ],
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      return state.concat(payload);
    }
    case REMOVE_TODO: {
      const { id } = payload;
      return state.filter((todo) => todo.id !== id);
    }
    default: {
      return state;
    }
  }
};

export default TodoReducer;
