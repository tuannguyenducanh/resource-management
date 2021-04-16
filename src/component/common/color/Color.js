import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Color = (props) => {
  const [newColor, setNewColor] = useState("");
  const { colors, onColorAdded, onColorDeleted } = props;
  return (
    <div className="color-component">
      <div className="new-color-form">
        <input
          className="new-color-input"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />

        <button
          onClick={() => onColorAdded(newColor)}
          className="new-color-button"
        >
          Tạo màu
        </button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(["Màu"]).map((value, index) => (
              <th key={index}>{value}</th>
            ))}
            <th></th>
          </tr>
        </thead>

        {colors.map((color, i) => (
          <tbody key={i} className="todo-item-container">
            <tr>
              <td>{i + 1}</td>
              <td>{color}</td>
              <td>
                <button
                  onClick={() => {
                    onColorDeleted(color);
                  }}
                  className="completed-button"
                >
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Color;
