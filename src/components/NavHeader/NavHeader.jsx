import React from 'react'
import MenuHeader from 'components/MenuHeader/MenuHeader';
import styles from './NavHeader.module.scss'

const NavHeader = ({ onClick }) => {
    return (
        <nav className={ styles.nav }>
            <ul className={ styles.nav__container }>
                <MenuHeader title='home' to='/' onClick={ onClick } />
                <MenuHeader title='sobre' to='sobre' onClick={ onClick } />
                <MenuHeader title='agentes' to='agentes' onClick={ onClick } />
                <MenuHeader title='mapas' to='mapas' onClick={ onClick } />
                <MenuHeader title='arsenal' to='arsenal' onClick={ onClick } />
            </ul>
        </nav>
    )
}

export default NavHeader