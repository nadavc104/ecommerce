import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    amount: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // console.log(current(state.cartItems))
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            console.log(itemIndex)
            // console.log(exists)
            if(itemIndex != -1) {
                console.log('exists')
                state.cartItems[itemIndex].quantity += 1
                state.amount += 1
                // console.log(current(state.cartItems))
                localStorage.setItem('cart', JSON.stringify(state.cartItems))

            } else {
                console.log('dont exists')
                const temp = {...action.payload, quantity: 1}
                state.cartItems.push(temp)
                state.amount += 1
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
            }
        },

        removeItem(state, action) {
            console.log(action.payload.id)
            const temp = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = temp
            localStorage.setItem('cart', JSON.stringify(state.cartItems))


        },

        incrementQuantity(state, action) {
            console.log(action.payload)
            console.log(current(state.cartItems))
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[itemIndex].quantity += 1
            localStorage.setItem('cart', JSON.stringify(state.cartItems))

        },

        decrementQuantity(state, action) {
            console.log(action.payload)
            console.log(current(state.cartItems))
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if(state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
            }
            else
                return
        },
        
        emptyCart(state, action) {
            state.cartItems = []
        }
    }
})

export const  calcAmount  = (state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
export const { addToCart, removeItem, incrementQuantity, decrementQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer