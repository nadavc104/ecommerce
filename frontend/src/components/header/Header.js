import React from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Searchbar from '../searchbar/Searchbar'

const Header = () => {

    return(
        <header className={styles.header}>
            <h1 style={{margin: '0',cursor: 'pointer'}} className={styles.icon}><Link to='/'>Icon</Link></h1>
            <Searchbar />
            <Navbar />
        </header>
    )
}

export default Header