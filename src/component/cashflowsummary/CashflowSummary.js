import React from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./CashflowSummary.css";
import DailySummary from "./dailysummary/DailySummary";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CashflowSummary extends React.Component {
  constructor(props) {
    super();
    const { styles } = props;
    const date = new Date();
    this.state = {
      selectionRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },

      summary: undefined,
    };
  }

  // componentDidMount() {
  // }

  handleSelect = (ranges) => {
    this.setState({
      selectionRange: ranges.selection,
    });
  };

  render() {
    const { cashflowSummary, dates, onEditCashFlowPressed } = this.props;
    return (
      <div className="month-summary-list-wrapper">
        <DateRangePicker
          ranges={[this.state.selectionRange]}
          onChange={this.handleSelect}
        />
        {cashflowSummary !== undefined ? (
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <div className="month-summary-header">
                  <div>Doanh thu</div>
                  <NumberFormat
                    value={cashflowSummary.revenue}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
                <div className="month-summary-header">
                  <div>Chi phí</div>
                  <NumberFormat
                    value={cashflowSummary.cost}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </div>
                <div className="month-summary-header">
                  <div>Lợi nhuận</div>
                  <div>{cashflowSummary.revenue - cashflowSummary.cost}</div>
                </div>
              </ListSubheader>
            }
            className={styles.root}
          >
            {dates.map((date, i) => (
              <DailySummary key={date} date={date} />
            ))}
          </List>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cashflowSummary: state.cashflowSummary,
    dates: state.cashflowSummary.dailySummaries.map(
      (dailySummary) => dailySummary.date
    ),
  };
};

export default connect(mapStateToProps)(CashflowSummary);
