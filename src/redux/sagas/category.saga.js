import { takeEvery, put } from "redux-saga/effects";
import axiosInstance from "../../axios";
import { CATEGORY_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getCategoryListSaga() {
  try {
    const response = yield axiosInstance.get("/Category/get-list-category.php");
    yield put({
      type: SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        error: error,
      },
    });
  }
}

export default function* categorySaga() {
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST),
    getCategoryListSaga
  );
}
