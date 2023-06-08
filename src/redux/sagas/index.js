import { fork } from "redux-saga/effects";

import authSaga from "./auth.saga";
import productSaga from "./product.saga";
import userSaga from "./user.saga";
import categorySaga from "./category.saga";
import brandSaga from "./brand.saga";
import seriesSaga from "./series.saga";
import imageSaga from "./image.saga";
import informationSaga from "./information.saga";
import orderSaga from "./order.saga";

export default function* rootSaga() {
  yield fork(categorySaga);
  yield fork(seriesSaga);
  yield fork(brandSaga);
  yield fork(productSaga);
  yield fork(imageSaga);
  yield fork(informationSaga);
  yield fork(userSaga);
  yield fork(authSaga);
  yield fork(orderSaga);
}
