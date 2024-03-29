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
  const btnOnClick = page => {
    navigate(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className={ styles.item }>
      <div className={ styles.item__container }>
        <Title className={ styles.item__title } text={ titleText } color={ titleColor }/>
        <div className={ descpritClass }>
          <div className={ styles.item__description }>
            <div className={ styles.item__content }>
              <SubTitle className={ styles.item__subtitle } text={ subTitle } color={ subTitleColor } />
              <Text className={ styles.item__text } text={ text } color={ textColor } />
            </div>
            <Button type={ typeBtn } title={ titleBtn } value={ valueBtn } color={ btnColor } onClick={ () => btnOnClick(page) } />
          </div>
          { video }
        </div>
      </div>
    </div>
  )
}

export default ItemDescription