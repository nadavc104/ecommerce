import React from 'react'
import { MdOutlineCancelPresentation } from 'react-icons/md'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import styles from './modal.module.scss'
import Backdrop from '../backdrop/Backdrop'

const ModalOverlay = ({onClose, items, onRemove}) => {
    console.log(items)
    const item = items?.map(item => 
        <div className={styles['favorite-item']} key={item.id}>
            <div>
                <Link onClick={onClose} to='/'>
                    <img style={{width: '100px', height: '100px'}} src={`/images/${item.img}`} alt={item.title} />
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.top}>
                    <Link onClick={onClose} to='/' style={{flexGrow: '1'}}>{item.title}</Link>
                    <button onClick={() => onRemove(item.id)}><FaTrash size='1.1rem' /></button>
                </div>
                <Link onClick={onClose} to='/'>{item.description}</Link>
            </div>
        </div>    
    )
    const content = (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>Favorites</h3>
                    <button onClick={onClose}><MdOutlineCancelPresentation size='1.5rem' /></button>
                </div>
                <div>
                    {item}
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(content, document.getElementById('modal'))
}

const Modal = ({open, onClose, items, onRemove}) => {
    console.log('modal component render')
    console.log(open)
    console.log(items)
    if(!open) return null

    return (
        <>
            <Backdrop onClose={onClose} />
            <ModalOverlay items={items} onClose={onClose} onRemove={onRemove}/>
        </>
    )

}

export default Modal