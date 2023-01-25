import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

const Card = ({product}) => {
    console.log(product)
    return(
        <div className={styles.container}>
        {product.discount && 
                <div style={{position: 'absolute', top: '20px', left: '0', padding: '2px',backgroundColor: 'lightblue', borderRadius: '50%', fontSize: '12px'}}>discount<br></br>available</div>
            
            }
            <div className={styles.img_container}>
                <Link to='/' style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <img src={product.img || 'http://via.placeholder.com/350x150'} alt=''  />
                </Link>
            </div>
            <div  style={{padding: '0 1rem'}}>
                <h3>{product.title}</h3>
                <Link to='/'><p>{product.description}.</p></Link>
            </div>
            <div style={{marginLeft: 'auto'}}><p>{product.price}$</p></div>
            <div className={styles.btn_container}>
                <button>Buy<br></br>now</button>
                <button>
                    <FaShoppingCart size= '1.2rem' />
                </button>
            </div>
            
        </div>
    )
}

export default Card