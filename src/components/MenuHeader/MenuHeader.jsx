import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuHeader.module.scss'

const MenuHeader = ({ to, title, onClick }) => {
  
  const activeStyle = {
    color: '#FF4655',
    borderBottom: '2px solid #FFF',
    paddingBottom: '5px',
    transition: 'all ease-in-out 0.2s'
  }

  return (
    <li className={ styles.list}>
      <NavLink 
        to={ to } 
        className={ styles.list__navLink } 
        style={({ isActive }) => isActive ? activeStyle : undefined}
        onClick={ () => onClick() }
      >
        {title}
      </NavLink>
    </li>
  )
}

export default MenuHeader