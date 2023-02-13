import React from 'react'
import ReactDOM from 'react-dom'
import styles from './backdrop.module.scss'

const Backdrop = ({onClose}) => {
    return ReactDOM.createPortal(<div onClick={onClose} className={styles.backdrop}></div>, document.getElementById('backdrop'))
}

export default Backdrop