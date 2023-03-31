import React from 'react'
import styles from './Arsenal.module.scss'
import weapons from 'json/weapons.json'

import Title from 'components/Title/Title'
import Select from 'components/Select/Select'
import NavWeapons from 'components/NavWeapons/NavWeapons'

const Arsenal = () => {

  const types = [...new Set(weapons.map(weapon => weapon.type))]
  
  return (
    <main className={ styles.main }>
      <section>
        <div>
          <Title 
            className={ styles.main__title }
            text='Escolha a sua arma'
            color='blue'
          />
          <Select
            name="weapons"
            types={ types }
            weaponId={ weapons.id }
          />
        </div>
        <div>
          <NavWeapons weapons={ weapons } />
        </div>
      </section>
      
    </main>
    
  )
}

export default Arsenal