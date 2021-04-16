import React, { useState } from "react";
import {
  addTextilePricing,
  deleteTextilePricing,
} from "../../../action/configuration/TextilePricingAction";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
// import "./SamplePricing.css";
import { Select, TextField, InputLabel } from "@material-ui/core";

const TextilePricing = (props) => {
  const [newTextileId, setNewTextileId] = useState("");
  const [newSellingPrice, setNewSellingPrice] = useState("");
  const {
    textileTypes,
    textilePricings,
    onTextilePricingAdded,
    onTextilePricingDeleted,
  } = props;

  const onTextilePricingAddedHandler = (textileTypeId, sellingPrice) => {
    var id = textilePricings.length;
    onTextilePricingAdded(id, parseInt(textileTypeId), sellingPrice);
  };

  return (
    <div className="color-component">
      <div className="new-color-form">
        <InputLabel id="select-pricing-sample">Mẫu đố</InputLabel>
        <Select
          name="select-pricing-sample"
          native
          value={newTextileId || ""}
          onChange={(e) => setNewTextileId(e.target.value)}
        >
          <option></option>
          {textileTypes.map((textileType, id) => (
            <option key={id} value={id}>
              {textileType.name + " " + textileType.color}
            </option>
          ))}
        </Select>
        <TextField
          margin="normal"
          name="newSellingPrice"
          label="Đơn giá vải"
          value={newSellingPrice || ""}
          onChange={(e) => setNewSellingPrice(e.target.value)}
        />
        <button
          onClick={() =>
            onTextilePricingAddedHandler(newTextileId, newSellingPrice)
          }
          className="new-color-button"
        >
          Tạo sản phẩm
        </button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(["Kiểu", "Giá bán", "Giá gia công"]).map(
              (value, index) => (
                <th key={index}>{value}</th>
              )
            )}
            <th></th>
          </tr>
        </thead>

        {textilePricings.map((textilePricing, i) => (
          <tbody key={i} className="todo-item-container">
            <tr>
              <td>{i + 1}</td>
              {textileTypes
                .filter(
                  (textileType) =>
                    textileType.id == textilePricing.textileTypeId
                )
                .map((textile) => (
                  <td>{textile.name + " " + textile.color}</td>
                ))}
              <td>{textilePricing.sellingPrice}</td>
              <td>
                <button
                  onClick={() => {
                    onTextilePricingDeleted(i);
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
    textilePricings: state.textilePricingComponent,
    textileTypes: state.textileTypeComponent,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onTextilePricingAdded: (id, textileTypeId, sellingPrice) =>
    dispatch(addTextilePricing(id, textileTypeId, sellingPrice)),
  onTextilePricingDeleted: (id) => dispatch(deleteTextilePricing(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextilePricing);
