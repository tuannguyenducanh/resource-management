import React, { useState } from "react";
import {
  addSampleType,
  deleteSampleType,
} from "../../../action/configuration/SampleTypeAction";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import "./SampleType.css";
import { Select, TextField } from "@material-ui/core";

const SampleType = (props) => {
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState("");
  const { sampleTypes, colors, onSampleTypeAdded, onSampleTypeDeleted } = props;

  const onSampleTypeAddedHandler = (name, color, size) => {
    var index = sampleTypes.length;
    onSampleTypeAdded(index, name, color, size);
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
        <TextField
          margin="normal"
          name="newSize"
          label="Kích cỡ"
          value={newSize || ""}
          onChange={(e) => setNewSize(e.target.value)}
        />
        <button
          onClick={() => onSampleTypeAddedHandler(newName, newColor, newSize)}
          className="new-color-button"
        >
          Tạo sản phẩm
        </button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(["Kiểu", "Màu", "Kích cỡ"]).map((value, index) => (
              <th key={index}>{value}</th>
            ))}
            <th></th>
          </tr>
        </thead>

        {sampleTypes.map((sample, i) => (
          <tbody key={i} className="todo-item-container">
            <tr>
              <td>{sample.id}</td>
              <td>{sample.name}</td>
              <td>{sample.color}</td>
              <td>{sample.size}</td>
              <td>
                <button
                  onClick={() => {
                    onSampleTypeDeleted(i);
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
    colors: state.sampleColorComponent,
    sampleTypes: state.sampleTypeComponent,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSampleTypeAdded: (id, name, color, size) =>
    dispatch(addSampleType(id, name, color, size)),
  onSampleTypeDeleted: (id) => dispatch(deleteSampleType(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleType);
