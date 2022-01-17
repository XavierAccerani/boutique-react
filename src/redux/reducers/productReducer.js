import { getByTitle } from "@testing-library/react";
import { ActionTypes } from "../constants/action-types";

const initialState = {
    product:[{
        id:1,
        title:"Xav",
        category:"dev-front-end"
    }],
}
export const productsReducer = ( state = initialState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
          
        default:
            return state;
    }

}

// 17 41