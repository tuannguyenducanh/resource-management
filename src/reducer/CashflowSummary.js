import {
  EDIT_CASHFLOW,
  DELETE_CASHFLOW,
} from "../action/CashflowSummaryAction";

const CashflowSummaryReducer = (
  state = {
    revenue: 4000000,
    cost: 3000000,
    dailySummaries: [
      {
        date: "01/04/2021",
        cashflows: [
          {
            id: 1,
            name: "Ban hang",
            value: 4000000,
            date: "01/04/2021",
            type: "variable",
          },
          {
            id: 2,
            name: "Mua hang",
            value: -2000000,
            date: "01/04/2021",
            type: "variable",
          },
          {
            id: "42323edad",
            name: "Chi photo",
            value: -1000000,
            date: "01/04/2021",
            type: "fixed",
          },
        ],
      },
    ],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_CASHFLOW: {
      const { date, id, name, value } = payload;
      const dailySummary = state.dailySummaries.find(
        (summary) => summary.date === date
      );
      const expectedCashflow = dailySummary.cashflows.find(
        (cashflow) => cashflow.id === id
      );
      expectedCashflow.name = name;
      expectedCashflow.value = value;
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export default CashflowSummaryReducer;
