import React, { useState } from "react";
import {
  addColor,
  deleteColor,
} from "../../../action/configuration/TextileColorAction";
import { connect } from "react-redux";
import Color from "../../common/color/Color";

const TextileColor = (props) => {
  const { colors, onColorAdded, onColorDeleted } = props;
  return (
    <Color
      colors={colors}
      onColorAdded={onColorAdded}
      onColorDeleted={onColorDeleted}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    colors: state.textileColorComponent,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onColorAdded: (color) => dispatch(addColor(color)),
  onColorDeleted: (color) => dispatch(deleteColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextileColor);
