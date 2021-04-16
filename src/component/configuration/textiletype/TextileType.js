import React, { useState } from "react";
import {
  addTextileType,
  deleteTextileType,
} from "../../../action/configuration/TextileTypeAction";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import "./TextileType.css";
import { Select, TextField } from "@material-ui/core";

const SampleType = (props) => {
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("");
  const {
    textileTypes,
    colors,
    onTextileTypeAdded,
    onTextileTypeDeleted,
  } = props;

  const onTextileTypeAddedHandler = (name, color) => {
    var id = textileTypes.length;
    onTextileTypeAdded(id, name, color);
  };
  return (
    <div className="color-component">
      <div className="new-color-form">
        <TextField
          margin="normal"
          name="newSampleType"
          label="Kiểu"
          value={newName || ""}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Select
          name="sample"
          native
          value={newColor || ""}
          onChange={(e) => setNewColor(e.target.value)}
        >
          <option></option>
          {colors.map((color, id) => (
            <option key={id} value={color}>
              {color}
            </option>
          ))}
        </Select>

        <button
          onClick={() => onTextileTypeAddedHandler(newName, newColor)}
          className="new-color-button"
        >
          Tạo sản phẩm
        </button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(["Kiểu", "Màu"]).map((value, index) => (
              <th key={index}>{value}</th>
            ))}
            <th></th>
          </tr>
        </thead>

        {textileTypes.map((textile, i) => (
          <tbody key={i} className="todo-item-container">
            <tr>
              <td>{i + 1}</td>
              <td>{textile.name}</td>
              <td>{textile.color}</td>
              <td>
                <button
                  onClick={() => {
                    onTextileTypeDeleted(i);
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    colors: state.textileColorComponent,
    textileTypes: state.textileTypeComponent,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onTextileTypeAdded: (id, name, color) =>
    dispatch(addTextileType(id, name, color)),
  onTextileTypeDeleted: (id) => dispatch(deleteTextileType(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleType);
