import { takeEvery, put } from "redux-saga/effects";
import axiosInstance from "../../axios";
import { PRODUCT_ACTION, SUCCESS, FAIL, REQUEST } from "../constants";

function* getProductListALLSaga() {
  try {
    const result = yield axiosInstance.get("/Product/get-list-all-product.php");
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL),
      payload: {
        error: e,
      },
    });
  }
}

function* getProductListByCategoryIdSaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axiosInstance.get(
      `/Product/get-product-by-category-id.php/?path=${data}`
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_ID),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_ID),
      payload: {
        error: e,
      },
    });
  }
}

function* getProductByIdSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axiosInstance.get(
      `/Product/get-product-by-id.php/?id=${id}`
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_BY_ID),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_BY_ID),
      error: error,
    });
  }
}

function* createProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    console.log(data);
    const response = yield axiosInstance.post(
      "/Product/create-product.php",
      data
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        data: response.data,
      },
    });
    yield callback.goToInsertImage();
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        error: "Error",
      },
    });
  }
}

function* updateProductSaga() {}

function* deleteProductSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axiosInstance.delete(
      `/Product/delete-product.php/?id=${id}`
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: {
        message: response.data.message,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: {
        message: error.response.data.message,
      },
    });
  }
}

export default function* productSaga() {
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ALL),
    getProductListALLSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_BY_ID),
    getProductByIdSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_ID),
    getProductListByCategoryIdSaga
  );
  yield takeEvery(REQUEST(PRODUCT_ACTION.CREATE_PRODUCT), createProductSaga);
  yield takeEvery("UPDATDE_PRODUCT_REQUES", updateProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.DELETE_PRODUCT), deleteProductSaga);
}
