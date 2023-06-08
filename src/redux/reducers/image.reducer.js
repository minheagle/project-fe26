import { createReducer } from "@reduxjs/toolkit";
import { IMAGE_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  imageList: {
    data: [],
    loading: false,
    error: "",
  },
  imageListByProduct: {
    data: [],
    loading: false,
    error: "",
  },
  createData: {
    loading: false,
    error: "",
  },
  updateData: {
    loading: false,
    error: "",
  },
  deleteData: {
    loading: false,
    error: "",
  },
};
const imageReducer = createReducer(initialState, {
  [REQUEST(IMAGE_ACTION.CREATE_IMAGE)]: (state, action) => {
    return {
      ...state,
      createData: {
        ...state.createData,
        loading: true,
      },
    };
  },
  [SUCCESS(IMAGE_ACTION.CREATE_IMAGE)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      imageListByProduct: {
        ...state.imageListByProduct,
        data: data,
      },
      createData: {
        ...state.createData,
        loading: false,
      },
    };
  },
  [FAIL(IMAGE_ACTION.CREATE_IMAGE)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createData: {
        ...state.createData,
        loading: false,
        error: error,
      },
    };
  },
});

export default imageReducer;
