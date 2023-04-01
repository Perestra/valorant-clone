import React from 'react'
import styles from './NavWeapons.module.scss'

import MenuWeapon from 'components/MenuWeapon/MenuWeapon'

const NavWeapons = ({ weapons }) => {
  return (
    <nav className={ styles.nav }>
      <ul className={ styles.nav__container }>
        {weapons.map(weapon => 
          <MenuWeapon 
            key={ weapon.id }
            title={ weapon.name }
            text={ weapon.summary }
            img={ weapon.image }
          />
        )}
      </ul>
    </nav>
  )
}

export default NavWeapons