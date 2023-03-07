import React from 'react'
import Button from 'components/Button/Button'
import styles from './ItemDescription.module.scss'

const ItemDescription = ({ h1Class, h1Text, descpritClass, h3Class, h3Text, pClass, pText, video, typeBtn, titleBtn, valueBtn, btnStyle }) => {
  return (
    <div className={ styles.item }>
      <div className={ styles.item__container }>
        <h1 className={ h1Class }>{ h1Text }</h1>
        <div className={ descpritClass }>
          <div className={ styles.item__description }>
            <h3 className={ h3Class }>{ h3Text }</h3>
            <p className={ pClass }>{ pText }</p>
            <Button type={ typeBtn } title={ titleBtn } value={ valueBtn } btnStyle={ btnStyle }/>
          </div>
          { video }
        </div>
      </div>
    </div>
  )
}

export default ItemDescription