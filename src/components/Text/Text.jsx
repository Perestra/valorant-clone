import React from 'react'
import styles from './Text.module.scss'

const Text = ({ className, text, color }) => {
  return (
    <p className={ 
        `${styles.text}
         ${styles[color]}
         ${className }`
    }>
        { text }
    </p>
  )
}

export default Text