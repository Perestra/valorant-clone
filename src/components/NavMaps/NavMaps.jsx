import React from 'react'
import styles from './NavMaps.module.scss'
import "swiper/scss";
import "swiper/scss/pagination"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper";

import MenuMaps from 'components/MenuMaps/MenuMaps'

const NavMaps = ({ maps }) => {
  return (
    <nav className={ styles.nav }>
        <ul>
            <Swiper
                spaceBetween={100}
                loop={true}
                grabCursor={true}
                navigation={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                className= { styles.nav__maps }
            >
                { maps.map(map => 
                    <SwiperSlide key={ map.id.toString().padStart(2,'0') }>
                        <MenuMaps
                            mapId={ map.id.toString().padStart(2,'0') }
                            mapName={ map.name }
                            MapDescription={ map.description }
                            mapImage={ map.image }
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </ul>
    </nav>
  )
}

export default NavMaps