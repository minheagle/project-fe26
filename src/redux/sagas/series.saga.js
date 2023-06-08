import { takeEvery, put } from "redux-saga/effects";
import axiosInstance from "../../axios";
import { SERIES_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getSeriesListSaga() {
  try {
    const response = yield axiosInstance.get("/Series/get-list-series.php");
    yield put({
      type: SUCCESS(SERIES_ACTION.GET_SERIES_LIST),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(SERIES_ACTION.GET_SERIES_LIST),
      payload: {
        error: error,
      },
    });
  }
}
function* getSeriesByBrandIdSaga(action) {
  try {
    const { brandId } = action.payload;
    const response = yield axiosInstance.get(
      `/Series/get-series-by-brand-id.php?brandId=${brandId}`
    );
    yield put({
      type: SUCCESS(SERIES_ACTION.GET_SERIES_BY_BRAND_ID),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(SERIES_ACTION.GET_SERIES_BY_BRAND_ID),
      payload: {
        error: error,
      },
    });
  }
}

function* createSeriesSaga(action) {
  try {
    const { data } = action.payload;
    const response = yield axiosInstance.post(
      "/Series/create-series.php",
      data
    );
    yield put({
      type: SUCCESS(SERIES_ACTION.CREATE_SERIES),
    });
  } catch (error) {
    yield put({
      type: FAIL(SERIES_ACTION.CREATE_SERIES),
      payload: {
        error: error,
      },
    });
  }
}

function* updateSeriesSaga(action) {
  try {
    const { data } = action.payload;
    const response = yield axiosInstance.put("/Series/update-series.php", data);
    yield put({
      type: SUCCESS(SERIES_ACTION.UPDATE_SERIES),
    });
  } catch (error) {
    yield put({
      type: FAIL(SERIES_ACTION.UPDATE_SERIES),
      payload: {
        error: error,
      },
    });
  }
}

function* deleteSeriesSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axiosInstance.delete(
      `/Series/create-series.php?id=${id}`
    );
    yield put({
      type: SUCCESS(SERIES_ACTION.DELETE_SERIES),
    });
  } catch (error) {
    yield put({
      type: FAIL(SERIES_ACTION.DELETE_SERIES),
      payload: {
        error: error,
      },
    });
  }
}

export default function* seriesSaga() {
  yield takeEvery(REQUEST(SERIES_ACTION.GET_SERIES_LIST), getSeriesListSaga);
  yield takeEvery(
    REQUEST(SERIES_ACTION.GET_SERIES_BY_BRAND_ID),
    getSeriesByBrandIdSaga
  );
  yield takeEvery(REQUEST(SERIES_ACTION.CREATE_SERIES), createSeriesSaga);
  yield takeEvery(REQUEST(SERIES_ACTION.UPDATE_SERIES), updateSeriesSaga);
  yield takeEvery(REQUEST(SERIES_ACTION.DELETE_SERIES), deleteSeriesSaga);
}
