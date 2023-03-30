import ListSkill from 'components/ListSkill/ListSkill'
import React from 'react'
import styles from './NavSkills.module.scss'

const NavSkills = ({ agent, setHability }) => {
  return (
    <nav className={ styles.nav }>
      <ul className={ styles.nav__listContainer }>
        {agent.skills.map((skill, index) => 
          <ListSkill key={ index } skillIcon={ skill.icon } skillName={ skill.name } onClick={ setHability.bind(null, index) } />
        )}
      </ul>
    </nav>
  )
}

export default NavSkills