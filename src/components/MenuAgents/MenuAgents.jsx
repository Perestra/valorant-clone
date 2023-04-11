import React from 'react'
import styles from './MenuAgents.module.scss'

import { NavLink } from 'react-router-dom'

const MenuAgents = ({ agentId, agentName }) => {

  const activeStyle = {
    color: '#FF4655'
  }

  return (
    <li 
      key={ agentId } 
      className={ styles.list } 
    >
      <NavLink
        to= {`/agentes/${agentName.includes("/")? agentName.replace("/", "-").toLowerCase() : agentName.toLowerCase()}`} 
        className={ styles.list__agent } 
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        <p className={ styles.list__agent__text  } >{ agentId }</p>
        <h1 className={ styles.list__agent__title } >{ agentName }</h1> 
      </NavLink>
    </li>
   
  )
}

export default MenuAgents