import { takeEvery, put } from "redux-saga/effects";
import axiosInstance from "../../axios";
import {
  SUCCESS,
  FAIL,
  REQUEST,
  INFORMATION_ACTION,
  PRODUCT_ACTION,
} from "../constants";

function* createInformationSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.post(
      "/Product/insert-information-product.php",
      data
    );
    console.log(response);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT),
      //   payload: {
      //     data: response.data,
      //   },
    });
    yield callback.goToProductList();
  } catch (error) {
    yield put({
      type: FAIL(PRODUCT_ACTION.UPDATE_PRODUCT),
      error: error,
    });
  }
}

export default function* informationSaga() {
  yield takeEvery(
    REQUEST(INFORMATION_ACTION.CREATE_INFORMATION),
    createInformationSaga
  );
}
