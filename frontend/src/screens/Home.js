import React, { useState, useEffect } from 'react'
import Card from '../components/card/Card'
import styles from './screen-styles/home.module.scss'
import headset from '../images/headset.jpeg'
import tv from '../images/tv.jpeg'
import laptop from '../images/laptop.jpeg'
import iphone from '../images/iphone.jpeg'

const Home = () => {

    const [state, setState] = useState({products: [
        {title:'headset', img: headset, stock: '5', price: '200',discount: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus.'},
         {title: 'tv', img: tv, stock: '3', price: '999', discount: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus.'},
         {title: 'laptop', img: laptop, stock: '6', price: '700', discount: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus.'},
         {title: 'phone', img: iphone, stock: '15', price: '445', discount: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tincidunt eu lorem ut, faucibus accumsan metus.'}

    ]})

    const list = state.products.map( (item, index) => <Card key={index} product={item}/>)
    console.log(list)
    useEffect(() => {
        console.log('homepage rendered')
    },[])
    console.log(state.products[0].img)
    return (<>
        <h1 style={{padding: '1rem 0'}}>products</h1>
        <div className={styles.list}>
            {list}
        </div>
    </> 
    )
}

export default Home