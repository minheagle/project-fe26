import { takeEvery, put } from "redux-saga/effects";
import axiosInstance from "../../axios";
import { BRAND_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getBrandListSaga() {
  try {
    const response = yield axiosInstance.get("/Brand/get-list-brand.php");
    yield put({
      type: SUCCESS(BRAND_ACTION.GET_BRAND_LIST),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(BRAND_ACTION.GET_BRAND_LIST),
      payload: {
        error: error,
      },
    });
  }
}

function* getBrandListByCategoryId(action) {
  try {
    const { categoryId } = action.payload;
    const response = yield axiosInstance.get(
      `/Brand/get-brand-by-category-id.php?categoryId=${categoryId}`
    );
    yield put({
      type: SUCCESS(BRAND_ACTION.GET_BRAND_BY_CATEGORY_ID),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(BRAND_ACTION.GET_BRAND_BY_CATEGORY_ID),
      payload: {
        error: error,
      },
    });
  }
}

function* createBrandSaga(action) {
  try {
    const { data } = action.payload;
    const response = yield axiosInstance.post("/Brand/create-brand.php", data);
    yield put({
      type: SUCCESS(BRAND_ACTION.CREATE_BRAND),
    });
  } catch (error) {
    yield put({
      type: FAIL(BRAND_ACTION.CREATE_BRAND),
      payload: {
        error: error,
      },
    });
  }
}

function* updateBrandSaga(action) {
  try {
    const { data } = action.payload;
    const response = yield axiosInstance.put("/Series/update-series.php", data);
    yield put({
      type: SUCCESS(BRAND_ACTION.UPDATE_BRAND),
    });
  } catch (error) {
    yield put({
      type: FAIL(BRAND_ACTION.UPDATE_BRAND),
      payload: {
        error: error,
      },
    });
  }
}

function* deleteBrandSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axiosInstance.delete(
      `/Series/create-series.php?id=${id}`
    );
    yield put({
      type: SUCCESS(BRAND_ACTION.DELETE_BRAND),
    });
  } catch (error) {
    yield put({
      type: FAIL(BRAND_ACTION.DELETE_BRAND),
      payload: {
        error: error,
      },
    });
  }
}

export default function* brandSaga() {
  yield takeEvery(REQUEST(BRAND_ACTION.GET_BRAND_LIST), getBrandListSaga);
  yield takeEvery(
    REQUEST(BRAND_ACTION.GET_BRAND_BY_CATEGORY_ID),
    getBrandListByCategoryId
  );
  yield takeEvery(REQUEST(BRAND_ACTION.CREATE_BRAND), createBrandSaga);
  yield takeEvery(REQUEST(BRAND_ACTION.UPDATE_BRAND), updateBrandSaga);
  yield takeEvery(REQUEST(BRAND_ACTION.DELETE_BRAND), deleteBrandSaga);
}
