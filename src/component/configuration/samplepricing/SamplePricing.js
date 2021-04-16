import React, { useState } from "react";
import {
  addSamplePricing,
  deleteSamplePricing,
} from "../../../action/configuration/SamplePricingAction";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import "./SamplePricing.css";
import { Select, TextField, InputLabel } from "@material-ui/core";

const SampleType = (props) => {
  const [newSampleId, setNewSampleId] = useState("");
  const [newSellingPrice, setNewSellingPrice] = useState("");
  const [newProcessingPrice, setNewProcessingPrice] = useState("");
  const {
    sampleTypes,
    samplePricings,
    onSamplePricingAdded,
    onSamplePricingDeleted,
  } = props;

  const onSamplePricingAddedHandler = (
    sampleTypeId,
    sellingPrice,
    processingPrice
  ) => {
    var id = samplePricings.length;
    onSamplePricingAdded(
      id,
      parseInt(sampleTypeId),
      sellingPrice,
      processingPrice
    );
  };

  return (
    <div className="color-component">
      <div className="new-color-form">
        <InputLabel id="select-pricing-sample">Mẫu đố</InputLabel>
        <Select
          name="select-pricing-sample"
          native
          value={newSampleId || ""}
          onChange={(e) => setNewSampleId(e.target.value)}
        >
          <option></option>
          {sampleTypes.map((sampleType, id) => (
            <option key={id} value={id}>
              {sampleType.name + " " + sampleType.color + " " + sampleType.size}
            </option>
          ))}
        </Select>
        <TextField
          margin="normal"
          name="newSellingPrice"
          label="Giá bán"
          value={newSellingPrice || ""}
          onChange={(e) => setNewSellingPrice(e.target.value)}
        />

        <TextField
          margin="normal"
          name="newProcessingPrice"
          label="Giá gia công"
          value={newProcessingPrice || ""}
          onChange={(e) => setNewProcessingPrice(e.target.value)}
        />
        <button
          onClick={() =>
            onSamplePricingAddedHandler(
              newSampleId,
              newSellingPrice,
              newProcessingPrice
            )
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

        {samplePricings.map((samplePricing, i) => (
          <tbody key={i} className="todo-item-container">
            <tr>
              <td>{i + 1}</td>
              {sampleTypes
                .filter(
                  (sampleType) => sampleType.id == samplePricing.sampleTypeId
                )
                .map((sampleType) => (
                  <td>
                    {sampleType.name +
                      " " +
                      sampleType.color +
                      " " +
                      sampleType.size}
                  </td>
                ))}
              <td>{samplePricing.sellingPrice}</td>
              <td>{samplePricing.processingPrice}</td>
              <td>
                <button
                  onClick={() => {
                    onSamplePricingDeleted(i);
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
    samplePricings: state.samplePricingComponent,
    sampleTypes: state.sampleTypeComponent,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSamplePricingAdded: (id, sampleTypeId, sellingPrice, processingPrice) =>
    dispatch(addSamplePricing(id, sampleTypeId, sellingPrice, processingPrice)),
  onSamplePricingDeleted: (id) => dispatch(deleteSamplePricing(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleType);
