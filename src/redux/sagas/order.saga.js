import { takeEvery, put, call } from "redux-saga/effects";
import axiosInstance from "../../axios";
import { ORDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* checkInfoShippingSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.post(
      "/Order/check-infor-shipping.php",
      data
    );
    console.log(response);
    yield put({
      type: SUCCESS(ORDER_ACTION.CHECK_INFO_SHIPPING),
      payload: {
        data: response.data.id,
        message: response.data.message
          ? response.data.message
          : "Cập nhật địa chỉ giao hàng thành công",
      },
    });
    yield callback.closeModal();
    yield callback.openModal2();
  } catch (error) {
    yield put({
      type: FAIL(ORDER_ACTION.CHECK_INFO_SHIPPING),
      payload: {
        error: "Lỗi",
      },
    });
  }
}

function* getListOrderForUserSaga(action) {}

function* getListOrderForAdminSaga() {
  try {
    const response = axiosInstance.get("/Order/get-all-order.php");
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_LIST_ORDER_FOR_ADMIN),
      payload: {
        data: response.data.orderList,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_LIST_ORDER_FOR_ADMIN),
      payload: {
        error: error.response.data.message,
      },
    });
  }
}

function* createOrderSaga(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield axiosInstance.post("/Order/create-order.php", data);
    yield put({
      type: SUCCESS(ORDER_ACTION.CREATE_ORDER),
      payload: {
        message: response.data.message,
      },
    });
    yield callback.closeModal2();
    yield localStorage.removeItem("cartList");
    yield callback.openModal3();
    // yield callback.goToHome();
  } catch (error) {
    yield put({
      type: FAIL(ORDER_ACTION.CREATE_ORDER),
      payload: {
        error: error,
      },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(
    REQUEST(ORDER_ACTION.CHECK_INFO_SHIPPING),
    checkInfoShippingSaga
  );
  yield takeEvery(
    REQUEST(ORDER_ACTION.GET_LIST_ORDER),
    getListOrderForUserSaga
  );
  yield takeEvery(
    REQUEST(ORDER_ACTION.GET_LIST_ORDER),
    getListOrderForAdminSaga
  );
  yield takeEvery(REQUEST(ORDER_ACTION.CREATE_ORDER), createOrderSaga);
}
