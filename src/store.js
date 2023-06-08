import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import categoryReducer from "./redux/reducers/category.reducer";
import productReducer from "./redux/reducers/product.reducer";
import userReducer from "./redux/reducers/user.reducer";
import authReducer from "./redux/reducers/auth.reducer";
import brandReducer from "./redux/reducers/brand.reducer";
import seriesReducer from "./redux/reducers/series.reducer";
import imageReducer from "./redux/reducers/image.reducer";
import cartReducer from "./redux/reducers/cart.reducer";
import orderReducer from "./redux/reducers/order.reducer";
import UIReducer from "./redux/reducers/UI.reducer";

import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    category: categoryReducer,
    brand: brandReducer,
    series: seriesReducer,
    product: productReducer,
    image: imageReducer,
    user: userReducer,
    auth: authReducer,
    cart: cartReducer,
    oder: orderReducer,
    UI: UIReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
