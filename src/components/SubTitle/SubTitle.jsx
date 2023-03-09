import React from 'react'
import styles from './SubTitle.module.scss'

const SubTitle = ({ text, color }) => {
  return (
    <h3 className={
        `${styles.subTitle}
         ${styles[color]}`
    }>
        { text }
    </h3>
  )
}

export default SubTitle