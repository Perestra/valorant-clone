import React from 'react'
import styles from './Text.module.scss'

const Text = ({ text, color }) => {
  return (
    <p className={ 
        `${styles.text}
         ${styles[color]}`
    }>
        { text }
    </p>
  )
}

export default Text