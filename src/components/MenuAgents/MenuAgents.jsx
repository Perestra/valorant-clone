import React from 'react'
import styles from './MenuAgents.module.scss'

import { NavLink } from 'react-router-dom'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'

const MenuAgents = ({ agentId, agentName  }) => {
  return (
    <li key={ agentId } className={ styles.agent } >
        <NavLink
            to= {`/agentes/${agentName}`}
            className={ styles.agent } 
        >
            <Text className={ styles.agent__text } text={ agentId } color='white'/>
            <Title className={ styles.agent__title } text={ agentName } color='white'/>
        </NavLink>
    </li>
   
  )
}

export default MenuAgents