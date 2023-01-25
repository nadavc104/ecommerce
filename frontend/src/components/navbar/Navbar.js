import React from 'react'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserCircle, FaHeart } from 'react-icons/fa'

const Navbar = () => {

    const liList = [
        {name: 'wish list', haveIcon: true, icon: <FaHeart />, path: '/wish-list'},
        {name: 'cart', haveIcon: true, icon: <FaShoppingCart />, path: '/cart' },
        {name: 'profile', haveIcon: true, icon: <FaUserCircle />, path: '/profile'},
    ]

    const lis = liList.filter(item => item.haveIcon === true).map((item, index) => 
        <li data-name={item.name} key={index}>
            <Link to={item.path}><span>{item.icon}</span></Link>
        </li>
    )

    return(
        <nav>
            <ul className={styles.ul}>
               {lis} 
            </ul>
        </nav>
    )
}

export default Navbar