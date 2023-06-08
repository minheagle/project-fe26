import { takeEvery, put, call } from "redux-saga/effects";
import axiosInstance from "../../axios";
import { AUTH_ACTION, SUCCESS, FAIL, REQUEST } from "../constants";

function* getRefreshTokenSaga(action) {
  try {
    const { accessToken } = action.payload;
    const result = yield axiosInstance.post("/Auth/auth.php", accessToken);
    yield put({
      type: SUCCESS(AUTH_ACTION.GET_REFRESH_TOKEN),
      payload: {
        data: result.accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeEvery(REQUEST(AUTH_ACTION.GET_REFRESH_TOKEN), getRefreshTokenSaga);
}
