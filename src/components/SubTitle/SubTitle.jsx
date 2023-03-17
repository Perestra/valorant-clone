import React from 'react'
import styles from './SubTitle.module.scss'

const SubTitle = ({ className, text, color }) => {
  return (
    <h3 className={
        `${styles.subTitle}
         ${styles[color]}
         ${className }`
    }>
        { text }
    </h3>
  )
}

export default SubTitle