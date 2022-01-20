import { getByTitle } from "@testing-library/react";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  product: [],
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
