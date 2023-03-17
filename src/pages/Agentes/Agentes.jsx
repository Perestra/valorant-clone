import NavAgents from 'components/NavAgents/NavAgents'
import React from 'react'
import styles from './Agentes.module.scss'

import agents from 'json/agents.json'
import ImgTag from 'components/ImgTag/ImgTag'
import SubTitle from 'components/SubTitle/SubTitle'
import Text from 'components/Text/Text'

import agentsImg from 'assets/images/agentes/agents.png'
import VideoTag from 'components/VideoTag/VideoTag'

const Agentes = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <VideoTag 
          className={styles.section__video} 
          poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG"
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4" 
        />
        <div className={styles.section__agents}>
          <NavAgents agents={ agents } />
          <ImgTag className={styles.section__img} src={ agentsImg } alt='Foto dos agentes Phoenix na esquerda, Viper ao centro e a Jett na direita' />
          <div className={ styles.section__knowTeam } >
            <SubTitle className={ styles.section__knowTeam__subTitle } text='// Conheça a equipe' color='white'/>
            <Text className={ styles.section__knowTeam__text } text='Encontre mais formas de plantar a Spike e enfrentar seus inimigos com lutadores, 
            estrategistas e caçadores de todos os tipos.' color='white'/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Agentes