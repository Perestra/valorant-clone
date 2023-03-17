import React from 'react'

import MenuAgents from 'components/MenuAgents/MenuAgents'

const NavAgents = ({ agents }) => {
  return (
    <nav>
      <ul>
        { agents.map(agent => 
          <MenuAgents
            key={ agent.id.toString().padStart(2,'0') }
            agentId={ agent.id.toString().padStart(2,'0') }
            agentName={ agent.name }       
          />
        ) }
      </ul>
    </nav>
  )
}

export default NavAgents