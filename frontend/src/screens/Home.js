import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/card/Card'
import styles from './screen-styles/home.module.scss'

const Home = () => {

    const productList = useSelector(state => state.products.productsList)
    const list = useMemo(() => productList.map((item, index) => <Card key={index} product={item}/>), productList)
    console.log(list)
    useEffect(() => {
        console.log('Home screen useEffect')
    },[list])
    console.log('Home screen render')

    return(
    <>
        <section>
            <h1 style={{padding: '1rem 0'}}>products</h1>
            <div className={styles.list}>
                {list}
            </div>
        </section>

    </> 
    )
}

export default Home