import { createAction } from "@reduxjs/toolkit";
import { AUTH_ACTION, SUCCESS } from "../constants";

export const getRefreshToken = createAction(
  SUCCESS(AUTH_ACTION.GET_REFRESH_TOKEN)
);
