import { createReducer } from "@reduxjs/toolkit";
import { ORDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  orderList: {
    data: [],
    loading: false,
    error: "",
  },
  checkInfoShipping: {
    data: "",
    loading: false,
    message: "",
    error: "",
  },
  createData: {
    loading: true,
    message: "",
    error: "",
  },
};

const orderReducer = createReducer(initialState, {
  [REQUEST(ORDER_ACTION.CHECK_INFO_SHIPPING)]: (state, action) => {
    return {
      ...state,
      checkInfoShipping: {
        ...state.checkInfoShipping,
        loading: true,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.CHECK_INFO_SHIPPING)]: (state, action) => {
    const { message, data } = action.payload;
    return {
      ...state,
      checkInfoShipping: {
        ...state.checkInfoShipping,
        loading: false,
        data: data,
        message: message,
      },
    };
  },
  [FAIL(ORDER_ACTION.CHECK_INFO_SHIPPING)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      checkInfoShipping: {
        ...state.checkInfoShipping,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(ORDER_ACTION.GET_LIST_ORDER_FOR_USER)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: true,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_LIST_ORDER_FOR_USER)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_LIST_ORDER_FOR_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(ORDER_ACTION.GET_LIST_ORDER_FOR_ADMIN)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: true,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_LIST_ORDER_FOR_ADMIN)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_LIST_ORDER_FOR_ADMIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(ORDER_ACTION.CREATE_ORDER)]: (state, action) => {
    return {
      ...state,
      createData: {
        ...state.createData,
        loading: true,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.CREATE_ORDER)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      createData: {
        ...state.createData,
        loading: false,
        data: [],
        message: message,
      },
    };
  },
  [FAIL(ORDER_ACTION.CREATE_ORDER)]: (state, action) => {
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

export default orderReducer;
