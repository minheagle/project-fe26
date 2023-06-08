import { createReducer } from "@reduxjs/toolkit";
import { PRODUCT_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  productList: {
    data: [],
    loading: true,
    error: "",
  },
  keyword: {
    data: "",
  },
  productListByCategory: {
    data: [],
    loading: true,
    error: "",
  },
  productInfo: {
    data: [],
    loading: true,
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
    loading: true,
    message: "",
    error: "",
  },
};

const productReducer = createReducer(initialState, {
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL)]: (state, action) => {
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ON_SEARCH)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      keyword: {
        ...state.keyword,
        data: data,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_ID)]: (state, action) => {
    return {
      ...state,
      productListByCategory: {
        ...state.productListByCategory,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_ID)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productListByCategory: {
        ...state.productListByCategory,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_ID)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productListByCategory: {
        ...state.productListByCategory,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_BY_ID)]: (state, action) => {
    return {
      ...state,
      productInfo: {
        ...state.productInfo,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_BY_ID)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productInfo: {
        ...state.productInfo,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productInfo: {
        ...state.productInfo,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createData: {
        ...state.createData,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productInfo: {
        ...state.productInfo,
        data: data,
      },
      createData: {
        ...state.createData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
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
  [REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateData: {
        ...state.updateData,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateData: {
        ...state.updateData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateData: {
        ...state.updateData,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteData: {
        ...state.deleteData,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      deleteData: {
        ...state.deleteData,
        loading: false,
        message: message,
      },
    };
  },
  DELETE_PRODUCT_FAIL: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      deleteData: {
        ...state.deleteData,
        loading: false,
        message: message,
      },
    };
  },
});

export default productReducer;
