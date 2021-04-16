export const EDIT_CASHFLOW = "EDIT_CASHFLOW";
export const editCashFlow = (date, id, name, value) => ({
  type: EDIT_CASHFLOW,
  payload: {
    date,
    id,
    name,
    value,
  },
});

export const DELETE_CASHFLOW = "DELETE_CASHFLOW";
export const deleteCashFlow = (date, id) => ({
  type: DELETE_CASHFLOW,
  payload: {
    date,
    id,
  },
});
