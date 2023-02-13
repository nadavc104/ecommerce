import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    list: localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [],
    open: false,
    quantity: 0
}

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish(state, action) {
            const item = state.list.filter(item => item.id === action.payload.id)
            console.log(item.length)
            if(!item.length) {
                state.list.push(action.payload)
                localStorage.setItem('wish', JSON.stringify(state.list))
            } else 
                return
            
        },

        toggleModal(state, action) {
            state.open = action.payload
        },

        updateWish(state, action) {
            console.log(state.list.length)
            state.quantity = state.list.length 
        },
        removeItem(state, action) {
            const temp = state.list.filter(item => item.id !== action.payload.id)
            state.list = temp
            localStorage.setItem('wish', JSON.stringify(state.list))
        }
    }
})

export const { addToWish, toggleModal, updateWish, removeItem } = wishSlice.actions
export default wishSlice.reducer