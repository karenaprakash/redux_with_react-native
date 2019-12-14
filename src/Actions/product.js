
import { 
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_RESPONSE,
    GET_PRODUCTS_REJECTED
 } from '../Types/types';

export const fetchData = () => {
    return {
        type: GET_PRODUCTS_REQUEST,
        payload: [],
    };
}

export const fetchDataFulfilled = (data) => {
    return {
        type: GET_PRODUCTS_RESPONSE,
        payload: data
    };
}

export const fetchDataRejected = () => {
    return {
        type: GET_PRODUCTS_REJECTED,
        payload: []
    };
}





//_getProducts
export const _getProducts = () => dispatch => {
 
  dispatch(fetchData())
    
  fetch('https://jsonplaceholder.typicode.com/users')
        .then( async result => {
            const data = await result.json();
            //console.log('data',data)
            dispatch(fetchDataFulfilled(data))
        })
        .catch(err=> {
            console.log('err',err)
            dispatch(fetchDataRejected())
        })
}
