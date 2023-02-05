import React, { useState, useRef } from 'react'
import styles from './Searchbar.module.scss'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const submitHandler = (e) => {
        console.log(e)
        setValue(inputRef.current.value)
    }
    // console.log(value)

    console.log('Searchbar component render')
    return(
        <div className={styles.container}>
            <input ref={inputRef} type='text' onKeyUp={(e) => e.key ==='Enter' ? submitHandler(e) : null}  placeholder='search'/>
            <button type='submit' onClick={submitHandler}><FaSearch /></button>
        </div>
    )
}

export default Searchbar