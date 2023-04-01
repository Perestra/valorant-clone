import React from 'react'
import styles from './MenuWeapon.module.scss'

import Title from 'components/Title/Title'
import ImgTag from 'components/ImgTag/ImgTag'
import Text from 'components/Text/Text'

const MenuWeapon = ({ title, img, text }) => {
  return (
    <li className={styles.list}>
        <div className={styles.list__weapon}>
            <Title 
                className={styles.list__title}
                text={ title }
                color='blue'
            />
            <ImgTag 
                className={styles.list__image}
                src={ img }
                alt={title}
            />
            <Text 
                className={styles.list__summary}
                text={ text }
                color='green'
            />
        </div>
    </li>
  )
}

export default MenuWeapon