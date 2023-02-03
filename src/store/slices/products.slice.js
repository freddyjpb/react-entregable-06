import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './app.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productsList : [],
        productsFiltered: []
    },
    reducers: {
        setProductsList: (state, { payload }) => {
            state.productsList = payload;
        },
        filterPrice: (state, { payload }) => {
            const { priceTo, priceFrom } = payload;

            const filtered = state.productsList.filter(product => {
                const max = priceTo ? +product.price <= priceTo : true;
                const min = priceFrom ? +product.price >= priceFrom : true;
                return min && max;
            });
            state.productsFiltered = filtered;
        },
        setProductsFiltered: (state, { payload }) => {
            state.productsFiltered = payload
        }
    }
});

export const getProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then(res => dispatch(setProductsList(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategoryThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId='+id)
        .then(res => dispatch(setProductsFiltered(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterNameThunk = (search) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products?title='+search)
        .then(res => dispatch(setProductsFiltered(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setProductsList, filterPrice, setProductsFiltered } = productsSlice.actions;

export default productsSlice.reducer;