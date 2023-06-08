import { takeEvery, put } from "redux-saga/effects";
import axiosInstance from "../../axios";
import { SUCCESS, FAIL, REQUEST, IMAGE_ACTION } from "../constants";

function* createImageSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.post(
      "/ImageProduct/create-image-product.php",
      data
    );
    console.log(response);
    yield put({
      type: SUCCESS(IMAGE_ACTION.CREATE_IMAGE),
      payload: {
        data: response.data,
      },
    });
    yield callback.goToInsertInfo();
  } catch (error) {
    yield put({
      type: FAIL(IMAGE_ACTION.CREATE_IMAGE),
      error: error,
    });
  }
}

export default function* imageSaga() {
  yield takeEvery(REQUEST(IMAGE_ACTION.CREATE_IMAGE), createImageSaga);
}
