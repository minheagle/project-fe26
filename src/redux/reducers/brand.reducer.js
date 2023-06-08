import { createReducer } from "@reduxjs/toolkit";
import { BRAND_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  brandList: {
    data: [],
    loading: false,
    error: "",
  },
  createBrand: {
    loading: false,
    error: "",
  },
  updateBrand: {
    loading: false,
    error: "",
  },
  deleteBrand: {
    loading: false,
    error: "",
  },
};

const brandReducer = createReducer(initialState, {
  [REQUEST(BRAND_ACTION.GET_BRAND_LIST)]: (state, action) => {
    return {
      ...state,
      brandList: {
        ...state.brandList,
        loading: true,
      },
    };
  },
  [SUCCESS(BRAND_ACTION.GET_BRAND_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      brandList: {
        ...state.brandList,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(BRAND_ACTION.GET_BRAND_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      brandList: {
        ...state.brandList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(BRAND_ACTION.GET_BRAND_BY_CATEGORY_ID)]: (state, action) => {
    return {
      ...state,
      brandList: {
        ...state.brandList,
        loading: true,
      },
    };
  },
  [SUCCESS(BRAND_ACTION.GET_BRAND_BY_CATEGORY_ID)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      brandList: {
        ...state.brandList,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(BRAND_ACTION.GET_BRAND_BY_CATEGORY_ID)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      brandList: {
        ...state.brandList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(BRAND_ACTION.CREATE_BRAND)]: (state, action) => {
    return {
      ...state,
      createBrand: {
        ...state.createBrand,
        loading: true,
      },
    };
  },
  [SUCCESS(BRAND_ACTION.CREATE_BRAND)]: (state, action) => {
    return {
      ...state,
      createBrand: {
        ...state.createBrand,
        loading: false,
      },
    };
  },
  [FAIL(BRAND_ACTION.CREATE_BRAND)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createBrand: {
        ...state.createBrand,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(BRAND_ACTION.UPDATE_BRAND)]: (state, action) => {
    return {
      ...state,
      updateBrand: {
        ...state.updateBrand,
        loading: true,
      },
    };
  },
  [SUCCESS(BRAND_ACTION.UPDATE_BRAND)]: (state, action) => {
    return {
      ...state,
      updateBrand: {
        ...state.updateBrand,
        loading: false,
      },
    };
  },
  [FAIL(BRAND_ACTION.UPDATE_BRAND)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateBrand: {
        ...state.updateBrand,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(BRAND_ACTION.DELETE_BRAND)]: (state, action) => {
    return {
      ...state,
      deleteBrand: {
        ...state.deleteBrand,
        loading: true,
      },
    };
  },
  [SUCCESS(BRAND_ACTION.DELETE_BRAND)]: (state, action) => {
    return {
      ...state,
      deleteBrand: {
        ...state.deleteBrand,
        loading: false,
      },
    };
  },
  [FAIL(BRAND_ACTION.DELETE_BRAND)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteBrand: {
        ...state.deleteBrand,
        loading: false,
        error: error,
      },
    };
  },
});

export default brandReducer;
