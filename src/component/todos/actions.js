export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (id, sample, color, size, price) => ({
  type: CREATE_TODO,
  payload: { id, sample, color, size, price },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});
