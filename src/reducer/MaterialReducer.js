import { CHANGE_MATERIALS } from "../action/MaterialAction";

const MaterialReducer = (state = { materials: [] }, action) => {
  const { type, payload } = action;
  const { materials } = state;

  switch (type) {
    case CHANGE_MATERIALS: {
      const { added, changed, deleted } = payload;
      let changedRows;
      if (added) {
        const startingAddedId =
          materials.length > 0 ? materials[materials.length - 1].id + 1 : 0;
        changedRows = [
          ...materials,
          ...added.map((row, index) => ({
            id: startingAddedId + index,
            ...row,
          })),
        ];
      }
      if (changed) {
        changedRows = materials.map((row) =>
          changed[row.id] ? { ...row, ...changed[row.id] } : row
        );
      }
      if (deleted) {
        const deletedSet = new Set(deleted);
        changedRows = materials.filter((row) => !deletedSet.has(row.id));
      }
      state.materials = changedRows;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default MaterialReducer;
