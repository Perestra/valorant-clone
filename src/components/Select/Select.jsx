import React from 'react'
import styles from './Select.module.scss'

const Select = ({ name, weaponId, types }) => {
  return (
    <select className={ styles } name={ name }>
        <option key={0} value="">Todas as armas</option>
        {types.map(type => 
          <option key={ weaponId } value={ type }>{ type }</option>
        )}
        
    </select>
  )
}

export default Select