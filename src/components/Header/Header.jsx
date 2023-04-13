import React, { useState } from 'react'
import styles from './Header.module.scss'

import { ReactComponent as ValorantLogo } from 'assets/svg/valorant-logo.svg';
import { ReactComponent as RiotLogo } from 'assets/svg/riot-games-logo.svg';
import { IoIosMenu, IoMdClose } from 'react-icons/io'

import ImgTag from 'components/ImgTag/ImgTag';
import NavHeader from 'components/NavHeader/NavHeader';

import perfil from 'assets/images/perfil.jpg'

const Header = () => {

  const [mobile, setMobile] = useState('')
  const [icon, setIcon] = useState(true)

  const showMenu = () => {
    setMobile('active')
    setIcon(false)
    window.scrollTo(0,0)
    window.document.body.classList.add('scroll-lock')
  }

  const hideMenu = () => {
    setMobile('')
    setIcon(true)
    window.scrollTo(0,0)
    window.document.body.classList.remove('scroll-lock')
  }

  return (
    <header className={styles.header}>
      <div className={ styles.header__container }>
        <div className={ styles.header__logo }>
          <RiotLogo />
          <div className={ styles.slash }></div>
          <ValorantLogo />
        </div>
        {icon? 
          <IoIosMenu className={ styles.header__barIcon } onClick={ () => showMenu() } />
          : <IoMdClose className={ styles.header__closeIcon } onClick={ () => hideMenu() }/>
        }
        <div className={ `${styles.header__menu} ${styles[mobile]}` }>
          <NavHeader onClick={ hideMenu }/>
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