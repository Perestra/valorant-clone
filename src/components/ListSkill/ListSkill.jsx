import React from 'react'
import styles from './ListSkill.module.scss'

import ImgTag from 'components/ImgTag/ImgTag'

const ListSkill = ({ skillName, skillIcon, onClick }) => {
  return (
    <li 
      key={ skillName } 
      className={ styles.list } 
      onClick={ onClick }
    >
      <ImgTag 
        className={ styles.list__icon }
        src={ skillIcon }
        alt={ skillName }
      />
    </li>
  )
}

export default ListSkill