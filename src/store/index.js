import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app.slice'
import cartSlice from './slices/cart.slice'
import productsSlice from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
    reducer: {
        app: appSlice,
        products: productsSlice,
        cart: cartSlice,
        purchases: purchasesSlice
    }
})
