import { createReducer } from "@reduxjs/toolkit";
import { SERIES_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  seriesList: {
    data: [],
    loading: true,
    error: "",
  },
  createSeries: {
    loading: false,
    error: "",
  },
  updateSeries: {
    loading: false,
    error: "",
  },
  deleteSeries: {
    loading: false,
    error: "",
  },
};

const seriesReducer = createReducer(initialState, {
  [REQUEST(SERIES_ACTION.GET_SERIES_LIST)]: (state, action) => {
    return {
      ...state,
      seriesList: {
        ...state.seriesList,
        loading: true,
      },
    };
  },
  [SUCCESS(SERIES_ACTION.GET_SERIES_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      seriesList: {
        ...state.seriesList,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(SERIES_ACTION.GET_SERIES_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      seriesList: {
        ...state.seriesList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(SERIES_ACTION.GET_SERIES_BY_BRAND_ID)]: (state, action) => {
    return {
      ...state,
      seriesList: {
        ...state.seriesList,
        loading: true,
      },
    };
  },
  [SUCCESS(SERIES_ACTION.GET_SERIES_BY_BRAND_ID)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      seriesList: {
        ...state.seriesList,
        loading: false,
        data: data,
      },
    };
  },
  [FAIL(SERIES_ACTION.GET_SERIES_BY_BRAND_ID)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      seriesList: {
        ...state.seriesList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(SERIES_ACTION.CREATE_SERIES)]: (state, action) => {
    return {
      ...state,
      createSeries: {
        ...state.createSeries,
        loading: true,
      },
    };
  },
  [SUCCESS(SERIES_ACTION.CREATE_SERIES)]: (state, action) => {
    return {
      ...state,
      createSeries: {
        ...state.createSeries,
        loading: false,
      },
    };
  },
  [FAIL(SERIES_ACTION.CREATE_SERIES)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createSeries: {
        ...state.createSeries,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(SERIES_ACTION.UPDATE_SERIES)]: (state, action) => {
    return {
      ...state,
      updateSeries: {
        ...state.updateSeries,
        loading: true,
      },
    };
  },
  [SUCCESS(SERIES_ACTION.UPDATE_SERIES)]: (state, action) => {
    return {
      ...state,
      updateSeries: {
        ...state.updateSeries,
        loading: false,
      },
    };
  },
  [FAIL(SERIES_ACTION.UPDATE_SERIES)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateSeries: {
        ...state.updateSeries,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(SERIES_ACTION.DELETE_SERIES)]: (state, action) => {
    return {
      ...state,
      deleteSeries: {
        ...state.deleteSeries,
        loading: true,
      },
    };
  },
  [SUCCESS(SERIES_ACTION.DELETE_SERIES)]: (state, action) => {
    return {
      ...state,
      deleteSeries: {
        ...state.deleteSeries,
        loading: false,
      },
    };
  },
  [FAIL(SERIES_ACTION.DELETE_SERIES)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteSeries: {
        ...state.deleteSeries,
        loading: false,
        error: error,
      },
    };
  },
});

export default seriesReducer;
