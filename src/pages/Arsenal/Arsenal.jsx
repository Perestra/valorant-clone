import React, { useState } from 'react'
import styles from './Arsenal.module.scss'
import weapons from 'json/weapons.json'

import Title from 'components/Title/Title'
import Select from 'components/Select/Select'
import NavWeapons from 'components/NavWeapons/NavWeapons'

const Arsenal = () => {

  const types = [...new Set(weapons.map(weapon => weapon.type))]

  const [arsenal, setArsenal] = useState(weapons)

  const handleOnChange = e => {
    const type = e.target.value
    const filterWeapon = weapons.filter(weapon => weapon.type === type || type === '' ) 
    setArsenal(filterWeapon)
  }

  return (
    <main className={ styles.main }>
      <section className={ styles.main__section }>
        <Title 
          className={ styles.main__title }
          text='Escolha a sua arma'
          color='blue'
        />
        <div className={ styles.main__select }>
          <Select
            name="weapons"
            types={ types }
            weapons={ arsenal }
            onChange={ handleOnChange }
          />
        </div>
        <NavWeapons weapons={ arsenal } />
      </section>
    </main>
  )
}

export default Arsenal