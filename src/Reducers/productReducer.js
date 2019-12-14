import { 
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_RESPONSE,
    GET_PRODUCTS_REJECTED
 } from "../Types/types";

 const INITIAL_STATE = {
    getProductsResponse : [],
};

export const productReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, getProductsResponse : action.payload }
    case GET_PRODUCTS_RESPONSE:
    return { ...state, getProductsResponse : action.payload }
    case GET_PRODUCTS_REJECTED:
        return { ...state, getProductsResponse : action.payload }
    default:
      return state
  }
};

