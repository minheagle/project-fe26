import { createReducer } from "@reduxjs/toolkit";
import { UI_ACTION, REQUEST } from "../constants";

const initialState = {
  modalCheckUserOrder: {
    isOpen: false,
  },
};

const UIReducer = createReducer(initialState, {
  [REQUEST(UI_ACTION.CHANGE_STATE_MODAL_CHECK_USER_ORDER)]: (state, action) => {
    console.log(action);
    // const { data } = action.payload;
    // return {
    //   ...state,
    //   modalCheckUserOrder: {
    //     isOpen: data,
    //   },
    // };
  },
});

export default UIReducer;
