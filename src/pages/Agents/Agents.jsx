import NavAgents from 'components/NavAgents/NavAgents'
import React from 'react'
import styles from './Agents.module.scss'

import agents from 'json/agents.json'
import ImgTag from 'components/ImgTag/ImgTag'
import SubTitle from 'components/SubTitle/SubTitle'
import Text from 'components/Text/Text'

import agentsImg from 'assets/images/agentes/agents.png'

const Agents = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <ImgTag className={styles.section__background} src='https://playvalorant.com/assets/images/agents-background.jpg' alt='Imagem de fundo com o símbolo do valorant em vermelho' />
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

export default Agents