import { createAction } from "@reduxjs/toolkit";
import { CART_ACTION, REQUEST } from "../constants";

export const addToCartAction = createAction(REQUEST(CART_ACTION.ADD_TO_CART));
export const updateItemInCartAction = createAction(
  REQUEST(CART_ACTION.UPDATE_ITEM_IN_CART)
);
export const removeItemInCartAction = createAction(
  REQUEST(CART_ACTION.REMOVE_ITEM_IN_CART)
);
