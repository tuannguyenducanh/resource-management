import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [id, setId] = useState("");
  const [sample, setSample] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  return (
    <div className="new-sample-form">
      <input
        className="new-sample-input"
        type="number"
        placeholder="#"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="new-sample-input"
        type="text"
        placeholder="Mẫu"
        value={sample}
        onChange={(e) => setSample(e.target.value)}
      />
      <input
        className="new-sample-input"
        type="text"
        placeholder="Màu sắc"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        className="new-sample-input"
        type="number"
        placeholder="Loại"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <input
        className="new-sample-input"
        type="number"
        placeholder="Gía"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) =>
              todo.sample === sample &&
              todo.price === price &&
              todo.color === color &&
              todo.size === size
          );
          if (
            !isDuplicateText &&
            id !== "" &&
            sample !== "" &&
            color !== "" &&
            size !== "" &&
            price !== ""
          ) {
            onCreatePressed(id, sample, color, size, price);
            setId("");
            setSample("");
            setColor("");
            setSize("");
            setPrice("");
          }
        }}
        className="new-sample-button"
      >
        Tạo mẫu
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (id, sample, color, size, price) =>
    dispatch(createTodo(id, sample, color, size, price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
// export default NewTodoForm;
