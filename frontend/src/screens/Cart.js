import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './screen-styles/cart.module.scss'
import { FaUser } from 'react-icons/fa'
import CartItem from '../components/cart/CartItem'
import { emptyCart, updateCart } from '../features/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems, totalQuantity, totalPrice } = useSelector(state => state.cart)

    useEffect(() => {
        console.log('Cart useEffect render')
        dispatch(updateCart())
    },[cartItems, dispatch])

    const renderedItems = cartItems?.map(item => <CartItem key={item.id} item={item} />)
    
    const emptyCartHandler = () => {
        dispatch(emptyCart())
    }

    console.log('Cart screen render')
    console.log('total cart price:', totalPrice)
    console.log('rendered cart items', renderedItems)
    return(
        <section className={styles.container}>
            <div className={styles.auth}><span><FaUser /></span> hello please <Link to='/login'>login</Link> / <Link to='/register'>register</Link></div>
            <h1 style={{textAlign:'center'}}>Shopping Cart</h1>
            <div className={styles['cart-container']}>
                <div className={styles.row}>
                    <span> {totalQuantity > 0 ? `you have a total of ${totalQuantity} items in the shopping cart` : 'Cart is empty add items to cart!'} </span>
                    <button className={styles['empty-cart']} onClick={emptyCartHandler}>empty Cart</button>
                </div>
                <div className={styles.list}>
                    {renderedItems}
                </div>
                <div className={styles.total}><span>Subtotal</span><span>{totalPrice}$</span></div>
            </div>
        </section>
    )
}

export default Cart