import React from 'react'
import styles from './Button.module.scss'

const Button = ({ 
    onClick, 
    type, value, color,
    title }) => {
    return (
        <div 
            className={styles.container_btn}            
            onClick={ onClick } 
        >
            <button 
                type={type} 
                value={value} 
                className={
                   `${styles.btn}
                    ${styles[color]}`
                } 
            >
                <span className={styles.btn__text}>
                    {title}
                </span>
            </button>
        </div>

    )
}

export default Button