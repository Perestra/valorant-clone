import React from 'react'

import styles from './NavAgents.module.scss'
import 'swiper/scss'
import "swiper/scss/free-mode";

import MenuAgents from 'components/MenuAgents/MenuAgents'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";

const NavAgents = ({ agents }) => {
  return (
    <nav className={ styles.nav }>
      <ul className={ styles.nav__agents } >
          <Swiper
            slidesPerView={5.8}
            freeMode={true}
            direction="vertical"
            loop= {true}
            grabCursor={true}
            modules={[FreeMode]}
            className= { styles.nav__agent }
          >
            { agents.map(agent => 
                <SwiperSlide>
                  <MenuAgents
                    key={ agent.id.toString().padStart(2,'0') }
                    agentId={ agent.id.toString().padStart(2,'0') }
                    agentName={ agent.name }       
                  />
                </SwiperSlide>
            )}
          </Swiper>
      </ul>
    </nav>
  )
}

export default NavAgents