import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './cartItem.module.scss'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { incrementQuantity, decrementQuantity, removeItem} from '../../features/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    console.log('cartItem rendered')
    console.log(item)
    return(
        <div className={styles.container}>
            <img className={styles.img} src={`/images/${item.img}`} alt={item.title} />
            <div className={styles['remove-item']}><button onClick={() => dispatch(removeItem({id: item.id}))}><RiDeleteBack2Line size='1.5rem'/></button></div>
            <div className={styles['content-container']}>
                <div>
                    <p>{item.title}</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <span>amount:</span>
                        <button onClick={() => dispatch(incrementQuantity({id: item.id}))}>+</button>
                        <span>{item.quantity}</span>
                        <button disabled={item.quantity === 1} onClick={() => dispatch(decrementQuantity({id: item.id}))}>-</button>
                    </div>
                    <div><span>price per unit: </span><span>{item.price}$</span></div>
                    <div><span>total price: </span><span>{item.quantity * item.price}$</span></div>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem