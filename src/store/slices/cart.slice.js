import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './app.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (_, { payload }) => payload
    }
})

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
        .then(res => dispatch(setCart(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addToCartThunk = (product) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', product, getConfig())
        .then(() => dispatch(getCartThunk))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteFromCartThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete('https://e-commerce-api-v2.academlo.tech/api/v1/cart/'+id, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const modifyQuantityThunk = (id, quantity) => dispatch => {
    return axios.put('https://e-commerce-api-v2.academlo.tech/api/v1/cart/'+id, quantity, getConfig())
        .then(() => dispatch(getCartThunk()))
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
