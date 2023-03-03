import React from 'react'
import styles from './Button.module.scss'

const Button = ({ type, value, title }) => {
    return (
        <div className={styles.container_btn}>
            <button type={type} value={value} className={styles.btn} >
                <span className={styles.btn__text} >{title}</span>
            </button>
        </div>

    )
}

export default Button