import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import productsReducer from './features/productsSlice'
import wishReducers from './features/wishSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        wish: wishReducers
    }
})