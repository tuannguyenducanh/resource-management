import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Plugin,
  Template,
  TemplateConnector,
  TemplatePlaceholder,
} from "@devexpress/dx-react-core";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiGrid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

// import MomentUtils from '@date-io/moment';
/* eslint-disable no-shadow */

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const MaterialPopup = ({
  products,
  row,
  onChange,
  onApplyChanges,
  onCancelChanges,
  open,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onCancelChanges}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Nhập mẫu mới</DialogTitle>
      <DialogContent>
        <MuiGrid container spacing={3}>
          <MuiGrid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Mẫu</InputLabel>
              <Select
                name="sample"
                native
                value={row.sample}
                onChange={onChange}
                input={<Input id="demo-dialog-native" />}
              >
                {products.map((product, id) => (
                  <option key={id} value={product.id}>
                    {product.sample + " " + product.color + " " + product.size}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormGroup>
              <TextField
                margin="normal"
                name="textileType"
                label="Loại vải"
                value={row.textileType || ""}
                onChange={onChange}
              />
              <TextField
                margin="normal"
                name="consumption"
                label="Định mức"
                value={row.consumption || ""}
                onChange={onChange}
              />
            </FormGroup>
          </MuiGrid>
        </MuiGrid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancelChanges} color="primary">
          Cancel
        </Button>
        <Button onClick={onApplyChanges} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productComponent.products,
  };
};

export default connect(mapStateToProps)(MaterialPopup);
