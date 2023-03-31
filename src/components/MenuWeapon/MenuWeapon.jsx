import React from 'react'
import styles from './MenuWeapon.module.scss'

import Title from 'components/Title/Title'
import ImgTag from 'components/ImgTag/ImgTag'
import Text from 'components/Text/Text'

const MenuWeapon = ({ title, img, text }) => {
  return (
    <li className={styles}>
        <div className={styles}>
            <Title 
                className={styles}
                text={ title }
                color='blue'
            />
            <ImgTag 
                className={styles}
                src={ img }
                alt={title}
            />
            <Text 
                className={styles}
                text={ text }
                color='green'
            />
        </div>
    </li>
  )
}

export default MenuWeapon