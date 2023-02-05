import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsList: [
         {id: '1', title:'headset', img: 'headset.jpeg', stock: '5', price: 200, discount: true, description: 'ng elitcing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus'},
         {id: '2', title: 'tv', img: 'tv.jpeg', stock: '3', price: '999', discount: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus.'},
         {id: '3', title: 'laptop', img: 'laptop.jpeg', stock: '6', price: 700, discount: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus.'},
         {id: '4', title: 'phone', img: 'iphone.jpeg', stock: '15', price: 445, discount: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus.'}
    ]
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export default productsSlice.reducer