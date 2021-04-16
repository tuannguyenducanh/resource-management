import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo } from "./actions";
import "./TodoList.css";
import { Table } from "react-bootstrap";

const TodoList = ({
  todos = [
    { id: 1, sample: "Cổ vuông", price: 285000, color: "Hồng", size: 1 },
  ],
  onRemovePressed,
  onEditPressed,
  onSavePressed,
  onCancelPressed,
}) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(["Mẫu", "Màu", "Loại", "Gía"]).map((value, index) => (
              <th key={index}>{value}</th>
            ))}
            <th></th>
          </tr>
        </thead>

        {todos.map((todo, i) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onEditPressed={onEditPressed}
            onSavePressed={onSavePressed}
            onCancelPressed={onCancelPressed}
          />
        ))}
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
