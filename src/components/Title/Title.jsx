import React from 'react'
import styles from './Title.module.scss'

const Title = ({ text, color }) => {
  return (
    <h1 className= { 
        `${styles.title}
         ${styles[color]}` 
    }>
        { text }
    </h1>
  )
}

export default Title