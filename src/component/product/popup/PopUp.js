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
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import MomentUtils from '@date-io/moment';
/* eslint-disable no-shadow */
const PopUp = ({ row, onChange, onApplyChanges, onCancelChanges, open }) => (
  <Dialog
    open={open}
    onClose={onCancelChanges}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Nhập mẫu mới</DialogTitle>
    <DialogContent>
      <MuiGrid container spacing={3}>
        <MuiGrid item xs={6}>
          <FormGroup>
            <TextField
              margin="normal"
              name="sample"
              label="Mẫu"
              value={row.sample || ""}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              name="color"
              label="Màu sắc"
              value={row.color || ""}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              name="size"
              label="Kích cỡ"
              value={row.size || ""}
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

export default PopUp;
