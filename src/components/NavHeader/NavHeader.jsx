import React from 'react'
import MenuHeader from 'components/MenuHeader/MenuHeader';
import styles from './NavHeader.module.scss'

const NavHeader = () => {
    return (
        <nav className={ styles.nav }>
            <ul className={ styles.nav__container }>
                <MenuHeader title='home' to='/' />
                <MenuHeader title='sobre' to='sobre' />
                <MenuHeader title='agentes' to='agentes' />
                <MenuHeader title='mapas' to='mapas' />
                <MenuHeader title='arsenal' to='arsenal' />
            </ul>
        </nav>
    )
}

export default NavHeader