export const ADD_TEXTILE_PRICING = "ADD_TEXTILE_PRICING";
export const addTextilePricing = (id, textileTypeId, sellingPrice) => ({
  type: ADD_TEXTILE_PRICING,
  payload: {
    id,
    textileTypeId,
    sellingPrice,
  },
});

export const DELETE_TEXTILE_PRICING = "DELETE_TEXTILE_PRICING";
export const deleteTextilePricing = (id) => ({
  type: DELETE_TEXTILE_PRICING,
  payload: {
    id,
  },
});
