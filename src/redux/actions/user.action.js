import { createAction } from "@reduxjs/toolkit";
import { USER_ACTION, REQUEST } from "../constants";

export const getUserListAction = createAction(
  REQUEST(USER_ACTION.GET_USER_LIST)
);
export const getUserInfoAction = createAction(
  REQUEST(USER_ACTION.GET_USER_INFO)
);
export const getUserByIdAction = createAction(
  REQUEST(USER_ACTION.GET_USER_BY_ID)
);
export const loginUserAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const registerUserAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const logoutUserAction = createAction(REQUEST(USER_ACTION.LOGOUT));
export const updateUserAction = createAction(REQUEST(USER_ACTION.UPDATE_USER));
export const changePasswordAction = createAction(
  REQUEST(USER_ACTION.CHANGE_PASSWORD)
);
export const updateUserForAdminAction = createAction(
  REQUEST(USER_ACTION.UPDATE_USER_FOR_ADMIN)
);
export const deleteUserAction = createAction(REQUEST(USER_ACTION.DELETE_USER));
