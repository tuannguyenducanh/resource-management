export const CHANGE_PRODUCTS = "CHANGE_PRODUCTS";
export const changeProducts = ({ added, changed, deleted }) => ({
  type: CHANGE_PRODUCTS,
  payload: {
    added,
    changed,
    deleted,
  },
});
