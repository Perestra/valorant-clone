import React from 'react'
import styles from './MenuMaps.module.scss'

import SubTitle from 'components/SubTitle/SubTitle'
import Text from 'components/Text/Text'

const MenuMaps = ({ mapId, mapName, MapDescription, mapImage }) => {
  return (
    <li 
        key={ mapId }
        className={ styles.map } 
        style={{ backgroundImage: `url(${mapImage})` }}
    >
      <div className={ styles.map__infos }>
        <div>
          <SubTitle 
            className={ styles.map__infos__id } 
            text={ mapId } 
            color='white' 
          />
        </div>
        <div className={ styles.map__nameDesc } >
          <SubTitle 
            className={ styles.map__infos__name } 
            text={ mapName }
            color='white' 
          />
          <Text 
            className={ styles.map__infos__description} 
            text={ MapDescription } 
            color='white' 
          />
        </div>
      </div>
    </li>
  )
}

export default MenuMaps