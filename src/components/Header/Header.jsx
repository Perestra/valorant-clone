import React from 'react'
import styles from './Header.module.scss'

import { ReactComponent as ValorantLogo } from 'assets/svg/valorant-logo.svg';
import { ReactComponent as RiotLogo } from 'assets/svg/riot-games-logo.svg';

import ImgTag from 'components/ImgTag/ImgTag';
import NavHeader from 'components/NavHeader/NavHeader';

import perfil from 'assets/images/perfil.jpg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={ styles.header__container }>
        <div className={ styles.header__logo }>
          <RiotLogo />
          <div className={ styles.slash }></div>
          <ValorantLogo />
        </div>
        <div className={ styles.header__menu }>
          <NavHeader />
          <div className={styles.header__profile}>
            <ImgTag 
              src={ perfil } 
              alt='Foto do Danilo segurando um shape de skate com a mão direita e com uma medalha de ouro no pescoço'
              className={ styles.header__img }
            />
            <div className={styles.header__username}>
              <span>DaniloPS</span>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header