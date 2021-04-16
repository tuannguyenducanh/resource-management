import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({
  todo,
  onRemovePressed,
  onEditPressed,
  onSavePressed,
  onCancelPressed,
}) => {
  return (
    <tbody className="todo-item-container">
      <tr>
        <td>{todo.id}</td>
        <td>{todo.sample}</td>
        <td>{todo.color}</td>
        <td>{todo.size}</td>
        <td>{todo.price}</td>
        <td>
          {todo.isCompleted ? null : (
            <button
              onClick={() => {
                onEditPressed(todo.text);
              }}
              className="completed-button"
            >
              Chỉnh sửa
            </button>
          )}
          <button
            onClick={() => onRemovePressed(todo.id)}
            className="remove-button"
          >
            Xóa
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TodoListItem;
