import { createReducer } from "@reduxjs/toolkit";
import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  userList: {
    data: [],
    loading: true,
    error: "",
  },
  userInfo: {
    data: {},
    loading: true,
    error: "",
  },
  userById: {
    data: {},
    loading: true,
    error: "",
  },
  registerData: {
    loading: false,
    message: "",
    error: "",
  },
  loginData: {
    loading: false,
    error: "",
  },
  logoutData: {
    loading: false,
    error: "",
  },
  updateData: {
    loading: false,
    message: "",
    error: "",
  },
  changePassword: {
    loading: false,
    message: "",
  },
  updateAdminData: {
    loading: false,
    message: "",
    error: "",
  },
  deleteData: {
    loading: true,
    message: "",
    error: "",
  },
};

const userReducer = createReducer(initialState, {
  [REQUEST(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.REGISTER)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      registerData: {
        loading: false,
        message: message,
      },
    };
  },
  [FAIL(USER_ACTION.REGISTER)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      registerData: {
        ...state.registerData,
        loading: false,
        message: message,
      },
    };
  },
  [REQUEST(USER_ACTION.LOGIN)]: (state, action) => {
    return {
      ...state,
      loginData: {
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.LOGIN)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: false,
        data: data,
      },
      loginData: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(USER_ACTION.LOGIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      loginData: {
        ...state.loginData,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(USER_ACTION.LOGOUT)]: (state, action) => {
    return {
      ...state,
      logoutData: {
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.LOGOUT)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        data: {},
        loading: false,
        error: "",
      },
      logoutData: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(USER_ACTION.LOGIN)]: (state, action) => {
    return {
      ...state,
      loginData: {
        ...state.loginData,
        loading: false,
      },
    };
  },
  [REQUEST(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    return {
      ...state,
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: false,
        error: "Fail",
      },
    };
  },
  [REQUEST(USER_ACTION.GET_USER_BY_ID)]: (state, action) => {
    return {
      ...state,
      userById: {
        ...state.userById,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_BY_ID)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userById: {
        ...state.userById,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_BY_ID)]: (state, action) => {
    return {
      ...state,
      userById: {
        ...state.userById,
        loading: false,
        error: "Bị lỗi",
      },
    };
  },
  [REQUEST(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.UPDATE_USER_FOR_ADMIN)]: (state, action) => {
    return {
      ...state,
      updateAdminData: {
        ...state.updateAdminData,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.UPDATE_USER_FOR_ADMIN)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      updateAdminData: {
        ...state.updateAdminData,
        message: message,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.UPDATE_USER_FOR_ADMIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateAdminData: {
        ...state.updateAdminData,
        error: error,
        loading: false,
      },
    };
  },
  [REQUEST(USER_ACTION.UPDATE_USER)]: (state, action) => {
    return {
      ...state,
      updateData: {
        ...state.updateData,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.UPDATE_USER)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      updateData: {
        ...state.updateData,
        message: message,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.UPDATE_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateData: {
        ...state.updateData,
        error: error,
        loading: false,
      },
    };
  },

  [REQUEST(USER_ACTION.CHANGE_PASSWORD)]: (state, action) => {
    return {
      ...state,
      changePassword: {
        ...state.changePassword,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.CHANGE_PASSWORD)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      changePassword: {
        ...state.changePassword,
        message: message,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.UPDATE_USER)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      changePassword: {
        ...state.changePassword,
        message: message,
        loading: false,
      },
    };
  },

  [REQUEST(USER_ACTION.DELETE_USER)]: (state, action) => {
    return {
      ...state,
      deleteData: {
        ...state.deleteData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.DELETE_USER)]: (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      deleteData: {
        ...state.deleteData,
        message: message,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.DELETE_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteData: {
        ...state.deleteData,
        loading: false,
        error: error,
      },
    };
  },
});

export default userReducer;
