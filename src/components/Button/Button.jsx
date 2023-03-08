import React from 'react'
import styles from './Button.module.scss'

const Button = ({ type, value, title, btnStyle, onClick }) => {
    return (
        <div className={styles.container_btn} onClick={ onClick } >
            <button type={type} value={value} className={styles.btn} style={ btnStyle }>
                <span className={styles.btn__text} >{title}</span>
            </button>
        </div>

    )
}

export default Button