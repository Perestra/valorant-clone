import React from 'react'
import Button from 'components/Button/Button'
import styles from './ItemDescription.module.scss'

const ItemDescription = ({ bgColorContainer, h1Class, h1Text, h3Class, h3Text, pClass, pText, video, typeBtn, titleBtn, valueBtn, bgColorBtn }) => {
  return (
    <section className={ styles.item } style={{ backgroundColor: bgColorContainer }}>
      <div className={ styles.item__container }>
        <h1 className={ h1Class }>{ h1Text }</h1>
        <div className={ styles.item__description_container }>
          <div className={ styles.item__description }>
            <h3 className={ h3Class }>{ h3Text }</h3>
            <p className={ pClass }>{ pText }</p>
            <Button type={ typeBtn } title={ titleBtn } value={ valueBtn } bgColorBtn={ bgColorBtn }/>
          </div>
          { video }
        </div>
        
      </div>
    </section>
  )
}

export default ItemDescription