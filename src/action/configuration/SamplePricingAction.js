export const ADD_SAMPLE_PRICING = "ADD_SAMPLE_PRICING";
export const addSamplePricing = (
  id,
  sampleTypeId,
  sellingPrice,
  processingPrice
) => ({
  type: ADD_SAMPLE_PRICING,
  payload: {
    id,
    sampleTypeId,
    sellingPrice,
    processingPrice,
  },
});

export const DELETE_SAMPLE_PRICING = "DELETE_SAMPLE_PRICING";
export const deleteSamplePricing = (id) => ({
  type: DELETE_SAMPLE_PRICING,
  payload: {
    id,
  },
});
