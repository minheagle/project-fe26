import { createAction } from "@reduxjs/toolkit";
import { ORDER_ACTION, REQUEST } from "../constants";

export const checkInfoShippingAction = createAction(
  REQUEST(ORDER_ACTION.CHECK_INFO_SHIPPING)
);
export const getListOderForUserAction = createAction(
  REQUEST(ORDER_ACTION.GET_LIST_ORDER_FOR_USER)
);
export const getListOderForAdminAction = createAction(
  REQUEST(ORDER_ACTION.GET_LIST_ORDER_FOR_ADMIN)
);
export const createOrderAction = createAction(
  REQUEST(ORDER_ACTION.CREATE_ORDER)
);
