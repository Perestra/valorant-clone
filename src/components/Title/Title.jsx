import React from 'react'
import styles from './Title.module.scss'

const Title = ({ className, text, color }) => {
  return (
    <h1 className= { 
        `${styles.title}
         ${styles[color]}
         ${className }`
    }>
        { text }
    </h1>
  )
}

export default Title