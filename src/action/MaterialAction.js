export const CHANGE_MATERIALS = "CHANGE_MATERIALS";
export const changeMaterials = ({ added, changed, deleted }) => ({
  type: CHANGE_MATERIALS,
  payload: {
    added,
    changed,
    deleted,
  },
});
