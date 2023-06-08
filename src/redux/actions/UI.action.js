import { createAction } from "@reduxjs/toolkit";
import { UI_ACTION, REQUEST } from "../constants";

export const changeStateModalCheckUserOrder = createAction(
  REQUEST(UI_ACTION.CHANGE_STATE_MODAL_CHECK_USER_ORDER)
);
