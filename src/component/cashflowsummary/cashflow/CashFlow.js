import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorder from "@material-ui/icons/StarBorder";
import EditIcon from "@material-ui/icons/Edit";
import NumberFormat from "react-number-format";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import { FIXED_COST } from "../../../constant/CashflowType";
import {
  editCashFlow,
  deleteCashFlow,
} from "../../../action/CashflowSummaryAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class DailyCashFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedDialog: false,
    };
  }

  onEditCashFlowPressed = () => {
    this.setState({
      open: true,
      name: this.props.cashflow.name,
      value: this.props.cashflow.value,
    });
  };

  onCancelPressed = () => {
    this.setState({
      isEditable: false,
    });
  };

  handleOpenDialog = () => {
    this.setState({
      openedDialog: true,
      name: this.props.cashflow.name,
      value: this.props.cashflow.value,
    });
  };

  handleCloseDialog = () => {
    this.setState({
      openedDialog: false,
      name: "",
      value: null,
    });
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changeCost = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleDoneDialog = () => {
    this.props.onDonePressed(
      this.props.date,
      this.props.id,
      this.state.name,
      this.state.value
    );
    this.setState({
      openedDialog: false,
      name: "",
      value: null,
    });
  };

  handleDeleteCashFlow = () => {};
  render() {
    const { cashflow } = this.props;
    return (
      <div>
        <ListItem button className={this.props.classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText value={cashflow.name}>{cashflow.name}</ListItemText>
          <ListItemText>
            <NumberFormat
              value={cashflow.value}
              displayType={"text"}
              thousandSeparator={true}
            />
          </ListItemText>
          <ListItemIcon>
            {cashflow.type === FIXED_COST ? (
              <IconButton onClick={this.handleOpenDialog}>
                <EditIcon />
              </IconButton>
            ) : (
              ""
            )}
          </ListItemIcon>
          <ListItemIcon>
            {cashflow.type === FIXED_COST ? (
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={this.props.onDeleteCashFlowPressed}
              >
                <DeleteIcon />
              </IconButton>
            ) : (
              ""
            )}
          </ListItemIcon>
        </ListItem>

        <div>
          <Dialog
            open={this.state.openedDialog}
            onClose={this.handleCloseDialog}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Tên chi phí"
                defaultValue={this.state.name}
                onChange={this.changeName}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Giá trị"
                defaultValue={this.state.value}
                onChange={this.changeCost}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleDoneDialog} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { date, id } = ownProps;
  const summary = state.cashflowSummary.dailySummaries.find(
    (dailySummary) => dailySummary.date === date
  );
  return {
    cashflow:
      summary !== undefined
        ? summary.cashflows.find((cashflow) => cashflow.id === id)
        : "",
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDonePressed: (date, id, name, value) => {
    dispatch(editCashFlow(date, id, name, value));
  },
  onDeleteCashFlowPressed: (date, id) => {
    dispatch(deleteCashFlow(date, id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DailyCashFlow));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      defaultValue={props.value}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
