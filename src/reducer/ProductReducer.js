import { CHANGE_PRODUCTS } from "../action/ProductAction";

const ProductReducer = (state = { products: [] }, action) => {
  const { type, payload } = action;
  const { products } = state;

  switch (type) {
    case CHANGE_PRODUCTS: {
      const { added, changed, deleted } = payload;
      let changedRows;
      if (added) {
        const startingAddedId =
          products.length > 0 ? products[products.length - 1].id + 1 : 0;
        changedRows = [
          ...products,
          ...added.map((row, index) => ({
            id: startingAddedId + index,
            ...row,
          })),
        ];
      }
      if (changed) {
        changedRows = products.map((row) =>
          changed[row.id] ? { ...row, ...changed[row.id] } : row
        );
      }
      if (deleted) {
        const deletedSet = new Set(deleted);
        changedRows = products.filter((row) => !deletedSet.has(row.id));
      }
      state.products = changedRows;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default ProductReducer;
