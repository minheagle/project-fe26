import { createAction } from "@reduxjs/toolkit";
import { PRODUCT_ACTION, REQUEST } from "../constants";

export const getProductListAllAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL)
);
export const getProductListOnSearchAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ON_SEARCH)
);
export const getProductByIdAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_BY_ID)
);
export const getProductByCategoryIdAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_ID)
);
export const createProductAction = createAction(
  REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)
);
export const updateProductAction = createAction(
  REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)
);
export const deleteProductAction = createAction(
  REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)
);
