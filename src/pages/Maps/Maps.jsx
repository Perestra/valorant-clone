import React from 'react'
import styles from './Maps.module.scss'

import NavMaps from 'components/NavMaps/NavMaps'
import Title from 'components/Title/Title'

import maps from 'json/maps.json'

const Maps = () => {
  return (
    <main className={ styles.maps }>
      <section className={ styles.maps__section }>
        <Title 
          className={ styles.maps__section__title }
          text='Mapas'
          color='blue'
        />
        <NavMaps maps={ maps }/>
      </section>
    </main>
  )
}

export default Maps