import React from 'react'
import { useSelector } from 'react-redux'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserCircle, FaHeart } from 'react-icons/fa'

const Navbar = () => {

    const cartItemsAmount = useSelector(state => state.cart.totalQuantity)
    console.log(cartItemsAmount)

    const liList = [
        {name: 'cart', haveIcon: true, icon: <FaShoppingCart size='1.3rem'/>, path: '/cart' },
        {name: 'wish list', haveIcon: true, icon: <FaHeart size='1.3rem'/>, path: '/wish-list'},
        {name: 'profile', haveIcon: true, icon: <FaUserCircle size='1.3rem'/>, path: '/profile'},
    ]

    const lis = liList.filter(item => item.haveIcon === true).map((item, index) => 
        <li data-name={item.name} key={index}>
            <Link to={item.path}>{item.icon}</Link>
            {item.name === 'cart' && <div className={styles['cart-amount']}>{cartItemsAmount}</div>}
        </li>
    )
    console.log('Navbar component render')

    return(
        <nav>
            <ul className={styles.ul}>
               {lis} 
            </ul>
        </nav>
    )
}

export default Navbar