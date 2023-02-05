import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RiDeleteBack2Line } from 'react-icons/ri'
import styles from './screen-styles/cart.module.scss'
import { FaUser } from 'react-icons/fa'
import { calcAmount, incrementQuantity, decrementQuantity, removeItem, emptyCart } from '../features/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalCartItems = useSelector(calcAmount)
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    useEffect(() => {
        console.log('useEffect render')
    },[renderedItems])

    const renderedItems = cartItems?.map(item => (
        <div key={item.id} style={{display:'flex', gap: '2rem', alignItems: 'center', padding: '.5rem'}}>
            <img style={{width: '100px',height: '80px'}} src={`/images/${item.img}`} alt='image' />
            <div style={{display: 'flex', flexDirection: 'column', flex: '1', position: 'relative'}}>
                <div style={{position: 'absolute', top: '0', right: '0'}}><button  style={{backgroundColor: 'lightgoldenrodyellow', border: 'none', cursor: 'pointer'}} onClick={() => dispatch(removeItem({id: item.id}))}>{ <RiDeleteBack2Line size='1.5rem'/>}</button></div>
                <div>
                    <p>{item.title}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: '3rem', backgroundColor: 'lightgrey'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '.2rem'}}>
                        <span>amount:</span>
                        <button style={{cursor: 'pointer'}} onClick={() => dispatch(incrementQuantity({id: item.id}))}>+</button>
                        <span style={{width: '1.5rem', backgroundColor: 'white', border: '1px solid grey', textAlign: 'center'}}>{item.quantity}</span>
                        <button style={{cursor: 'pointer'}} onClick={() => dispatch(decrementQuantity({id: item.id}))}>-</button>
                    </div>
                    <div><span>price per unit: </span><span>{item.price}$</span></div>
                    <div><span>total price: </span><span>{item.quantity * item.price}$</span></div>
                </div>
            </div>
        </div>
    ))
    
    const emptyCartHandler = () => {
        dispatch(emptyCart())
    }

    console.log('Cart screen render')
    console.log('total cart price:', totalPrice)
    console.log('rendered cart items', renderedItems)
    return(
        <section className={styles.container}>
            <div className={styles.auth}><span><FaUser /></span> hello guest <Link to='/login'>login</Link> / <Link to='/register'>register</Link></div>
            <h1 style={{textAlign:'center'}}>Shopping Cart</h1>
            <div className={styles['cart-container']}>
                <div className={styles.row}>
                    <span> {totalCartItems > 0 ? `you have a total of ${totalCartItems} items in the shopping cart` : 'Cart is empty add items to cart!'} </span>
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