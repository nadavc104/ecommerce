import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserCircle, FaHeart } from 'react-icons/fa'
import { toggleModal, removeItem, updateWish } from '../../features/wishSlice'
import Modal from '../modal/Modal'

export const Navbar = () => {

    const dispatch = useDispatch()
    const cartItemsAmount = useSelector(state => state.cart.totalQuantity)
    const { list, quantity, open } = useSelector(state => state.wish)

    useEffect(() => {
        console.log('navbar useEffect')
        dispatch(updateWish())
    },[list])

    const toggleHandler = (e) => {
        console.log('toggle click')
        console.log(e)
        dispatch(toggleModal(!open))
    }

    const removeItemHandler = (id) => {
        console.log('remove btn clicked')
        dispatch(removeItem({id: id}))
    }

    console.log('Navbar component render')
    console.log(cartItemsAmount)
    console.log(list)
    console.log(quantity)
    return(
        <nav>
            <ul className={styles.ul}>
               <li><Link to='/cart'><FaShoppingCart size='1.3rem'/></Link><div className={styles.amount}>{cartItemsAmount}</div></li>
               <li><button onClick={toggleHandler} className={styles['wish-btn']}><FaHeart size='1.3rem'/></button><div className={styles.amount}>{quantity}</div></li>
               <li><Link><FaUserCircle size='1.3rem'/></Link></li>
            </ul>
            {open && <Modal items={list} open={open} onClose={toggleHandler} onRemove={removeItemHandler} />}
        </nav>
    )
}

export default Navbar