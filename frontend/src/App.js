import React from 'react'
import './globals.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './screens/Home'

const App = () => {
    
    console.log('App.js')
    return(
    <>
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books' element={<h1>hey</h1>} />
            </Routes>
        </main>
    </>
    )
}

export default App