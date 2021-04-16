import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import PopupEditing from "../common/popupediting/PopupEditing";
import Popup from "./popup/PopUp";
import { changeProducts } from "../../action/ProductAction";
import { connect } from "react-redux";

const getRowId = (row) => row.id;
const Product = (props) => {
  const [columns] = useState([
    { name: "sample", title: "Mẫu" },
    { name: "color", title: "Màu sắc" },
    { name: "size", title: "Kích cỡ" },
  ]);

  const { products } = props;

  return (
    <Paper>
      <Grid rows={products} columns={columns} getRowId={getRowId}>
        <EditingState onCommitChanges={props.onProductChanged} />
        <Table />
        <TableHeaderRow />
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        <PopupEditing popupComponent={Popup} />
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productComponent.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onProductChanged: ({ added, changed, deleted }) =>
    dispatch(changeProducts({ added, changed, deleted })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
