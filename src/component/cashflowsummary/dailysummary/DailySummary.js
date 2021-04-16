import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import CashFlow from "../cashflow/CashFlow";

const styles = (theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class DailySummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  removeItem = (index) => {
    const filtered = this.state.products[select].colors.filter(
      (color, i) => i !== index
    );

    this.setState((prevState) => {
      return {
        select: select,
        index: index,
        products: [
          ...prevState.products.slice(0, select),
          Object.assign({}, prevState.products[select], { colors: filtered }),
          ...prevState.products.slice(select + 1),
        ],
      };
    });
  };

  render() {
    const { dailySummary, cashflows } = this.props;
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={dailySummary.date} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="Mui-disabled">
            {dailySummary.cashflows.map((cashflow, i) => (
              <CashFlow
                key={cashflow.id}
                date={cashflow.date}
                id={cashflow.id}
              />
            ))}
          </List>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { date } = ownProps;
  return {
    dailySummary: state.cashflowSummary.dailySummaries.find(
      (dailySummary) => dailySummary.date === date
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onEditCashFlowPressed: (id) => dispatch(editCashFlow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailySummary);
