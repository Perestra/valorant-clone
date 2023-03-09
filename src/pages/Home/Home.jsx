import Button from 'components/Button/Button'
import React from 'react'
import styles from './Home.module.scss'

import { ReactComponent as ValorantText } from 'assets/svg/valorant-text.svg'

import ItemDescription from 'components/ItemDescription/ItemDescription'
import VideoTag from 'components/VideoTag/VideoTag'
import ImgTag from 'components/ImgTag/ImgTag'
import ReynaRaize from 'assets/images/home/Reyna-Raze.png'
import Text from 'components/Text/Text'

const Home = () => {
  return (
    <main className={ styles.home }>
      <section className={ styles.home__container }>
        <Text 
          text= 'Um jogo de tiro tático 5x5 com personagens originais'
          color= 'white'
        />
        <ValorantText className={styles.logo_name}/>
        <Button type='button' value='Jogue Grátis' title='Jogue Grátis' color= 'red'/>
      </section>
      <section className={ styles.home__about__section }>
        <ItemDescription 
          descpritClass={ styles.about__description_container }

          titleText='Nós somos valorant'
          titleColor= 'blue'

          subTitle='A criatividade é sua melhor arma.'
          subTitleColor= 'green'

          text='Misture o seu estilo e experiência em um cenário global e competitivo. 
          Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. 
          Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. 
          Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!'
          textColor= 'green'

          typeBtn='button'
          valueBtn='Sobre o jogo'
          titleBtn='Sobre o jogo'
          btnColor= 'red'
          
          page= "/sobre"
          
          video={ <VideoTag /> }
      />
      </section>
      <section className={ styles.home__agents__section }>
        <ImgTag alt='Imagem da Reyna e Raize uma ao lado da outra' src={ ReynaRaize } className={ styles.home__ReynaRaize }/>
        <ItemDescription 
          descpritClass={ styles.agents__description_container  }

          titleText='Seus Agentes'
          titleColor= 'white'

          subTitle='Desafie seus limites'
          subTitleColor= 'white'

          text='Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, 
          rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro.
          Cada Agente é único, assim como os momentos de destaque de cada partida!'
          textColor= 'white'

          typeBtn='button'
          valueBtn='Ver todos os agentes'
          titleBtn='Ver todos os agentes'
          btnColor= 'white'

          page= "/agentes"
        />
      </section>
      <section className={ styles.home__maps__section }>
        <ItemDescription 
          descpritClass={ styles.maps__description_container  }

          titleText='Seus Mapas'
          titleColor= 'blue'

          subTitle='Batalhe ao redor do mundo'
          subTitleColor= 'green'

          text='Cada mapa serve como um palco para mostrar sua criatividade. 
          Os mapas são feitos sob medida para estratégias de equipe, jogadas espetaculares e momentos eletrizantes. 
          Faça as jogadas que todo mundo vai tentar imitar no futuro!'
          textColor= 'green'

          typeBtn='button'
          valueBtn='Ver todos os mapas'
          titleBtn='Ver todos os mapas'
          btnColor= 'red'

          page= "/mapas"
        />
      </section>
    </main>
  )
}

export default Home