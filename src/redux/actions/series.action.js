import { createAction } from "@reduxjs/toolkit";
import { SERIES_ACTION, REQUEST } from "../constants";

export const getSeriesListAction = createAction(
  REQUEST(SERIES_ACTION.GET_SERIES_LIST)
);
export const getSeriesByBrandIdAction = createAction(
  REQUEST(SERIES_ACTION.GET_SERIES_BY_BRAND_ID)
);
export const getSeriesByIdAction = createAction(
  REQUEST(SERIES_ACTION.GET_SERIES_BY_ID)
);
export const createSeriesAction = createAction(
  REQUEST(SERIES_ACTION.CREATE_SERIES)
);
export const updateSeriesAction = createAction(
  REQUEST(SERIES_ACTION.UPDATE_SERIES)
);
export const deleteSeriesAction = createAction(
  REQUEST(SERIES_ACTION.DELETE_SERIES)
);
