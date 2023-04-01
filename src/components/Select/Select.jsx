import React from 'react'
import styles from './Select.module.scss'

const Select = ({ name, types, onChange }) => {
  return (
    <select className={ styles.select} name={ name } onChange={ onChange }>
      <option className={ styles.select__option } key={0} value="">
        Todas as armas
      </option>
      {types.map((type, index) => 
        <option 
          className={ styles.select__option } 
          key={ index } 
          value={ type }
        >
          { type }
        </option>
      )}
    </select>
  )
}

export default Select

