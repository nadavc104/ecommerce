import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './globals.scss'
import { Routes, Route } from 'react-router-dom'
import { updateCart } from './features/cartSlice'
import { updateWish } from './features/wishSlice'
import Header from './components/header/Header'
import Home from './screens/Home'
import Cart from './screens/Cart'
const App = () => {

    const dispatch = useDispatch()
    console.log('App.js render')

    useEffect(() => {
        dispatch(updateCart())
        dispatch(updateWish())

    },[])
    return(
    <>
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </main>
    </>
    )
}

export default App