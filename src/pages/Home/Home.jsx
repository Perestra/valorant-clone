import Button from 'components/Button/Button'
import React from 'react'
import styles from './Home.module.scss'

import { ReactComponent as ValorantText } from 'assets/svg/valorant-text.svg'
import ItemDescription from 'components/ItemDescription/ItemDescription'
import VideoTag from 'components/VideoTag/VideoTag'
import ImgTag from 'components/ImgTag/ImgTag'
import ReynaRaize from 'assets/images/Reyna-Raze.png'

const Home = () => {

  const BtnLightColor = {
    backgroundColor: '#ECE8E1',
    color: '#383E3A'
  }
  const BtnRedColor = {
    backgroundColor: '#FF4655',
    color: '#FFFFFF'
  }

  return (
    <main className={ styles.home }>
      <section className={ styles.home__container }>
        <p>Um jogo de tiro tático 5x5 com personagens originais</p>
        <ValorantText className={styles.logo_name}/>
        <Button type='button' value='Jogue Grátis' title='Jogue Grátis' btnStyle={ BtnRedColor }/>
      </section>
      <section className={ styles.home__about__section }>
        <ItemDescription 
          descpritClass={ styles.about__description_container }

          h1Text='Nós somos valorant'
          h1Class={ styles.home__h1About }

          h3Text='A criatividade é sua melhor arma.'
          h3Class={ styles.home__h3About }

          pText='Misture o seu estilo e experiência em um cenário global e competitivo. 
          Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. 
          Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. 
          Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!'
          pClass={ styles.home__pAbout }

          titleBtn='Sobre o jogo'
          valueBtn='Sobre o jogo'
          typeBtn='button'
          btnStyle={ BtnRedColor }
          page= "/sobre"
          
          video={ <VideoTag /> }
      />
      </section>
      <section className={ styles.home__agents__section }>
        <ImgTag alt='Imagem da Reyna e Raize uma ao lado da outra' src={ ReynaRaize } className={ styles.home__ReynaRaize }/>
        <ItemDescription 
          descpritClass={ styles.agents__description_container  }

          h1Text='Seus Agentes'
          h1Class={ styles.home__h1Agents }

          h3Text='Desafie seus limites'
          h3Class={ styles.home__h3Agents }

          pText='Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, 
          rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro.
          Cada Agente é único, assim como os momentos de destaque de cada partida!'
          pClass={ styles.home__pAgents }

          titleBtn='Ver todos os agentes'
          valueBtn='Ver todos os agentes'
          typeBtn='button'
          btnStyle={ BtnLightColor }
          page= "/agentes"
        />
      </section>
      <section className={ styles.home__maps__section }>
        <ItemDescription 
          descpritClass={ styles.maps__description_container  }

          h1Text='Seus Mapas'
          h1Class={ styles.home__h1Maps }

          h3Text='Batalhe ao redor do mundo'
          h3Class={ styles.home__h3Maps }

          pText='Cada mapa serve como um palco para mostrar sua criatividade. 
          Os mapas são feitos sob medida para estratégias de equipe, jogadas espetaculares e momentos eletrizantes. 
          Faça as jogadas que todo mundo vai tentar imitar no futuro!'
          pClass={ styles.home__pMaps }

          titleBtn='Ver todos os mapas'
          valueBtn='Ver todos os mapas'
          typeBtn='button'
          btnStyle={ BtnRedColor }
          page= "/mapas"
        />
      </section>
      
    </main>
  )
}

export default Home