import { createAction } from "@reduxjs/toolkit";
import { BRAND_ACTION, REQUEST } from "../constants";

export const getBrandListAction = createAction(
  REQUEST(BRAND_ACTION.GET_BRAND_LIST)
);
export const getBrandByCategoryIdAction = createAction(
  REQUEST(BRAND_ACTION.GET_BRAND_BY_CATEGORY_ID)
);
export const getBrandByIdAction = createAction(
  REQUEST(BRAND_ACTION.GET_BRAND_BY_ID)
);
export const createBrandAction = createAction(
  REQUEST(BRAND_ACTION.CREATE_BRAND)
);
export const updateBrandAction = createAction(
  REQUEST(BRAND_ACTION.UPDATE_BRAND)
);
export const deleteBrandAction = createAction(
  REQUEST(BRAND_ACTION.DELETE_BRAND)
);
