import Button from 'components/Button/Button'
import React from 'react'
import styles from './Home.module.scss'

import { ReactComponent as ValorantText } from 'assets/svg/valorant-text.svg'

const Home = () => {
  return (
    <div className={ styles.home }>
      <div className={ styles.home__container }>
        <p>Um jogo de tiro tático 5x5 com personagens originais</p>
        <ValorantText className={styles.logo_name}/>
        <Button type='button' value='Jogue Grátis' title='Jogue Grátis' />
      </div>
    </div>
  )
}

export default Home