import { createReducer } from "@reduxjs/toolkit";
import { AUTH_ACTION, SUCCESS } from "../constants";

const initialState = {
  accessToken: "",
};

const authReducer = createReducer(initialState, {
  [SUCCESS(AUTH_ACTION.GET_REFRESH_TOKEN)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      accessToken: data,
    };
  },
});

export default authReducer;
