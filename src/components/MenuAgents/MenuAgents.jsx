import React from 'react'
import styles from './MenuAgents.module.scss'

import { NavLink } from 'react-router-dom'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'

const MenuAgents = ({ agentId, agentName  }) => {
  return (
    <li key={ agentId } className={ styles.list } >
        <NavLink
            to= {`/agentes/${agentName}`}
            className={ styles.list__agent } 
        >
            <Text className={ styles.list__agent__text } text={ agentId } color='white'/>
            <Title className={ styles.list__agent__title } text={ agentName } color='white'/>
        </NavLink>
    </li>
   
  )
}

export default MenuAgents