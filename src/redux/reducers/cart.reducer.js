import { createReducer } from "@reduxjs/toolkit";
import { CART_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],
};

const cartReducer = createReducer(initialState, {
  [REQUEST(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    let newCartList = [...state.cartList];
    const { productId, quantity } = action.payload;
    const existProductIndex = state.cartList.findIndex(
      (item) => item.productId === productId
    );

    if (existProductIndex !== -1) {
      newCartList.splice(existProductIndex, 1, {
        ...state.cartList[existProductIndex],
        quantity: state.cartList[existProductIndex].quantity + quantity,
      });
    } else {
      newCartList = [action.payload, ...state.cartList];
    }
    localStorage.setItem("cartList", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.UPDATE_ITEM_IN_CART)]: (state, action) => {
    let newCartList = [...state.cartList];
    const { productId, quantity } = action.payload;
    const existProductIndex = state.cartList.findIndex(
      (item) => item.productId === productId
    );

    if (existProductIndex !== -1) {
      newCartList.splice(existProductIndex, 1, {
        ...state.cartList[existProductIndex],
        quantity: quantity,
      });
    }
    localStorage.setItem("cartList", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.REMOVE_ITEM_IN_CART)]: (state, action) => {
    const { productId } = action.payload;
    const newCartList = state.cartList.filter(
      (item) => item.productId !== productId
    );

    localStorage.setItem("cartList", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },
});

export default cartReducer;
