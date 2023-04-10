import React from 'react'
import styles from './MenuWeapon.module.scss'

import Title from 'components/Title/Title'
import ImgTag from 'components/ImgTag/ImgTag'
import Text from 'components/Text/Text'
import SubTitle from 'components/SubTitle/SubTitle'

const MenuWeapon = ({ title, img, text, type, weapons }) => {

    const weapon = weapons.find(weapon => {
        return weapon.name === title
    })
    

  return (
    <li className={styles.list}>
        <Title 
            className={styles.list__title}
            text={ title }
            color='blue'
        />
        <div className={styles.list__weapon}>
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
        <div className={styles.list__details}>
            <div className={styles.list__type}>
                <SubTitle 
                    className={styles.list__subtitle}
                    text='Tipo //'
                    color='white'
                />
                <Text
                    className={styles.list__typeWeapon}
                    text={ type }
                    color='white'
                />
            </div>
            <div>
                {weapon.description.map((descript, index) => 
                    <Text 
                        key={ index }
                        className={styles.list__description}
                        text={ descript.first }
                        color='white'
                    />
                )}
            </div>
        </div>
    </li>
  )
}

export default MenuWeapon