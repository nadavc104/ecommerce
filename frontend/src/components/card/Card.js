import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './card.module.scss'
import { FaHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { addToCart, updateCart } from '../../features/cartSlice'
import { addToWish, updateWish } from '../../features/wishSlice'

const Card = ({product}) => {
    // console.log(product)
    const dispatch = useDispatch()

    const list  = useSelector(state => state.wish.list)
    // console.log(list)
    // console.log(list.includes(product))
    const addToCartHandler = () => {
        dispatch(addToCart({id: product.id, title: product.title, img: product.img, price: product.price}))
        dispatch(updateCart())
    }

    const addToWishHandler = () => {
        dispatch(addToWish({id: product.id, title: product.title, img: product.img, description: product.description}))
    }

    console.log('card component render')

    return(
        <article className={styles.container}>
            {product.discount && 
                <div style={{position: 'absolute', top: '20px', left: '0', padding: '2px',backgroundColor: 'lightblue', borderRadius: '50%', fontSize: '12px'}}
                >discount<br></br>available</div>
            }
            <div className={styles.wish}>
                <FaHeart onClick={addToWishHandler} size='1.2rem' color={list.some(item => item.id === product.id) ? 'red' : 'gray' } />
            </div>
            <div className={styles.img_container}>
                <Link to='/' style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <img src={`/images/${product.img}`}  alt='' />
                </Link>
            </div>
            <div className={styles.body}>
                <Link to='/'>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </Link>
                <span>{product.price}$</span>
            </div>
            <div className={styles['btn-container']}>
                <button>Buy<br></br>now</button>
                <button onClick={addToCartHandler}>
                    <FaShoppingCart size= '1.2rem' />
                </button>
            </div>
        </article>
    )
}

export default Card