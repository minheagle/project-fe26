import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import jwt_decode from "jwt-decode";
import axiosInstance from "../../axios";

import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* loginUserSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.post("/Auth/login.php", data);
    yield JSON.stringify(
      localStorage.setItem("accessToken", response.data.accessToken)
    );
    yield JSON.stringify(
      localStorage.setItem("refreshToken", response.data.refreshToken)
    );
    yield put({
      type: SUCCESS(USER_ACTION.LOGIN),
      payload: {
        data: response.data.userInfo,
      },
    });
    if (response.data.userInfo.userRole === "admin") {
      yield callback.goToDashboard();
    } else {
      yield callback.goToHome();
    }
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.LOGIN),
      payload: {
        error: "Đăng nhập thất bại",
      },
    });
  }
}

function* logoutUserSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.post("/Auth/logout-user.php", data);
    yield localStorage.removeItem("accessToken");
    yield localStorage.removeItem("refreshToken");
    yield put({
      type: SUCCESS(USER_ACTION.LOGOUT),
    });
    yield callback.goToHome();
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.LOGOUT),
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axiosInstance.get(
      `/User/get-user-info.php?id=${id}`
    );
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_INFO),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_INFO),
      error: error.response.data.message,
    });
  }
}
function* getUserByIdSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axiosInstance.get(
      `/User/get-user-info.php?id=${id}`
    );
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_BY_ID),
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_BY_ID),
      error: error.response.data.message,
    });
  }
}

function* registerUserSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.post("/Auth/register.php", data);
    yield put({
      type: SUCCESS(USER_ACTION.REGISTER),
      payload: {
        message: response.data.message,
      },
    });
    yield callback.goToLogin();
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.REGISTER),
      payload: {
        message: error.response.data.message,
      },
    });
  }
}

function* getUserListSaga() {
  try {
    const response = yield axiosInstance.get("/User/get-list-user.php");
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_LIST),
      payload: {
        data: response.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_LIST),
      payload: {
        error: "Error",
      },
    });
  }
}

function* updateUserSaga(action) {
  try {
    const { data } = action.payload;
    const response = yield axiosInstance.put("/User/update-user.php", data);
    yield put({
      type: SUCCESS(USER_ACTION.UPDATE_USER),
      payload: {
        message: response.data.message,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.UPDATE_USER),
      payload: {
        message: "Cập nhật không thành công",
      },
    });
  }
}

function* changePasswordSaga(action) {
  try {
    const { data } = action.payload;
    const response = yield axiosInstance.put("/Auth/change-password.php", data);
    yield put({
      type: SUCCESS(USER_ACTION.CHANGE_PASSWORD),
      payload: {
        message: response.data.message,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.CHANGE_PASSWORD),
      payload: {
        message: "Thay đổi mật khẩu không thành công",
      },
    });
  }
}

function* updateUserForAdminSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.put(
      "/User/update-user-admin.php",
      data
    );
    yield put({
      type: SUCCESS(USER_ACTION.UPDATE_USER_FOR_ADMIN),
      payload: {
        message: response.data.message,
      },
    });
    yield callback.goToUserList();
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.UPDATE_USER_FOR_ADMIN),
      payload: {
        message: "Cập nhật không thành công",
      },
    });
  }
}

function* deleteUserSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axiosInstance.delete(
      `/User/delete-user.php?id=${id}`
    );
    yield put({
      type: SUCCESS(USER_ACTION.DELETE_USER),
      payload: {
        message: response.data.message,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(USER_ACTION.DELETE_USER),
      payload: {
        error: "Error",
      },
    });
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.LOGIN), loginUserSaga);
  yield takeEvery(REQUEST(USER_ACTION.REGISTER), registerUserSaga);
  yield takeEvery(REQUEST(USER_ACTION.LOGOUT), logoutUserSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_LIST), getUserListSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_INFO), getUserInfoSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_BY_ID), getUserByIdSaga);
  yield takeEvery(REQUEST(USER_ACTION.UPDATE_USER), updateUserSaga);
  yield takeEvery(REQUEST(USER_ACTION.CHANGE_PASSWORD), changePasswordSaga);
  yield takeEvery(
    REQUEST(USER_ACTION.UPDATE_USER_FOR_ADMIN),
    updateUserForAdminSaga
  );
  yield takeEvery(REQUEST(USER_ACTION.DELETE_USER), deleteUserSaga);
}
