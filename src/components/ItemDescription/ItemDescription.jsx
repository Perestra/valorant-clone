import React from 'react'
import styles from './ItemDescription.module.scss'

import Title from 'components/Title/Title'
import SubTitle from 'components/SubTitle/SubTitle'
import Text from 'components/Text/Text'
import Button from 'components/Button/Button'

import { useNavigate } from 'react-router-dom'

const ItemDescription = ({ 
  titleColor, titleText, 
  descpritClass, 
  subTitle, subTitleColor,
  text, textColor,
  typeBtn, titleBtn, valueBtn, btnColor, 
  video, 
  page }) => {

  const navigate = useNavigate()

  return (
    <div className={ styles.item }>
      <div className={ styles.item__container }>
        <Title color={ titleColor } text={ titleText }/>
        <div className={ descpritClass }>
          <div className={ styles.item__description }>
            <SubTitle text={ subTitle } color={ subTitleColor } />
            <Text text={ text } color={ textColor } />
            <Button type={ typeBtn } title={ titleBtn } value={ valueBtn } color={ btnColor } onClick={ () => navigate(page) } />
          </div>
          { video }
        </div>
      </div>
    </div>
  )
}

export default ItemDescription