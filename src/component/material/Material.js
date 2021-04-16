import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Plugin,
  Template,
  TemplateConnector,
  TemplatePlaceholder,
} from "@devexpress/dx-react-core";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiGrid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import MomentUtils from '@date-io/moment';
/* eslint-disable no-shadow */
import PopupEditing from "../common/popupediting/PopupEditing";
import MaterialPopup from "./popup/MateriaPopup";
import { changeMaterials } from "../../action/MaterialAction";
import { connect } from "react-redux";

const getRowId = (row) => row.id;

const Material = (props) => {
  const [columns] = useState([
    { name: "sample", title: "Mẫu" },
    { name: "textileType", title: "Loại vải" },
    { name: "consumption", title: "Định mức" },
  ]);

  const { materials, products } = props;
  const getCellValue = (row, columnName) => {
    if (columnName === "sample") {
      var textileSample = products[row.sample];
      return (
        textileSample.sample +
        " " +
        textileSample.color +
        " " +
        textileSample.size
      );
    } else {
      return row[columnName];
    }
  };
  return (
    <Paper>
      <Grid
        rows={materials}
        columns={columns}
        getRowId={getRowId}
        getCellValue={getCellValue}
      >
        <EditingState onCommitChanges={props.onMaterialChanged} />
        <Table />
        <TableHeaderRow />
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        <PopupEditing popupComponent={MaterialPopup} />
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productComponent.products,
    materials: state.materialComponent.materials,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMaterialChanged: ({ added, changed, deleted }) =>
    dispatch(changeMaterials({ added, changed, deleted })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Material);
