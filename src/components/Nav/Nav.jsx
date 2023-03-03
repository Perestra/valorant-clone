import React from 'react'
import MenuHeader from 'components/MenuHeader/MenuHeader';
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={ styles.nav }>
            <ul className={ styles.nav__container }>
                <MenuHeader title='home' to='/' />
                <MenuHeader title='sobre' to='sobre' />
                <MenuHeader title='agentes' to='agentes' />
                <MenuHeader title='mapas' to='mapas' />
                <MenuHeader title='armas' to='armas' />
            </ul>
        </nav>
    )
}

export default Nav