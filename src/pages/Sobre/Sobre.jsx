import React from 'react'
import styles from './Sobre.module.scss'

import ImgTag from 'components/ImgTag/ImgTag'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'

import bgAbout from 'assets/images/sobre/bg-about.png'
import Guide1 from 'assets/images/sobre/guia_1.jpg'
import Guide2 from 'assets/images/sobre/guia_2.jpg'
import Guide3 from 'assets/images/sobre/guia_3.jpg'
import Guide4 from 'assets/images/sobre/guia_4.jpg'
import Guide5 from 'assets/images/sobre/guia_5.jpg'
import Guide6 from 'assets/images/sobre/guia_6.jpg'
import Guide7 from 'assets/images/sobre/guia_7.jpg'

const Sobre = () => {
  return (
    <main className={ styles.main }>
      <div className={ styles.about }>
        <ImgTag className={ styles.about__img } src={ bgAbout } alt='Foto do agente Brinstone segurando uma Odin' />
      </div>
      <section className={ styles.about__section }>
        <Title className={ styles.about__section__title } text='Guia para iniciantes' color='blue'/>
        <article className={ styles.about__article }>
          <Text className={ styles.about__article__text }
                color='green' 
                text='Este é o Guia para Iniciantes de VALORANT, 
                cortesia do próprio Brimstone! 
                Não importa se é a sua primeira vez no jogo ou se você só precisa relembrar algumas coisas... 
                achamos que é melhor aprender com o Agente mais experiente!' 
          />
          <Text className={ styles.about__article__text }
                color='green' 
                text='Abaixo está tudo o que você precisa saber antes da primeira partida. 
                Como diria nosso querido Brimstone: presta atenção, quem sabe cê aprende.' 
          />
          <ImgTag src={ Guide1 } alt='Foto explicando sobre o que é valorant' />
          <Text className={ styles.about__article__text }
                color='green'
                text='Antes de começar a primeira rodada, 
                você escolherá um personagem dentre um grupo de Agentes, 
                cada um com sua própria função e habilidades especiais que se complementam e ajudam a vencer a partida. 
                É possível conferir mais informações sobre cada Agente na nossa página de Agentes.'
          />
          <ImgTag src={ Guide2 } alt='Foto explicando sobre cada função dos agentes' />
          <Text className={ styles.about__article__text }
                color='green'
                text='Depois que todos selecionarem seus Agentes, 
                a equipe é enviada para um mapa aleatório e a primeira rodada tem início.'
          />
          <Text className={ styles.about__article__text }
                color='green'
                text='Você começará como atacante ou defensor e trocará de lado após algumas rodadas. 
                No entanto, antes de assumir sua posição, você deve passar pela fase de compra, que permite comprar armas e habilidades. 
                O que você compra ajuda a definir sua estratégia de vitória. 
                As decisões de compra podem ser guiadas pelo seu estilo de jogo ou pela composição das equipes.'
          />
          <ImgTag src={ Guide3 } alt='Foto explicando sobre como é uma rodada' />
          <Text className={ styles.about__article__text }
                color='green'
                text='Ninguém vai dizer como gastar seu dinheiro, 
                mas vamos aos fatos: em algum momento, você vai ter que puxar o gatilho.'
          />
          <Text className={ styles.about__article__text }
                color='green'
                text='Existe uma arma para cada situação. 
                Você pode descobrir mais sobre elas na nossa página de arsenal. 
                Se bater a dúvida, tente escolher com base no tipo e veja se combina com seu estilo de jogo, 
                sua experiência e a estratégia da sua equipe.'
          />
          <ImgTag src={ Guide4 } alt='Foto explicando sobre as armas e seus tipos' />
          <Text className={ styles.about__article__text }
                color='green'
                text='Cada mapa traz uma forma diferente de colocar seu estilo de jogo em prática. 
                Demonstre sua criatividade e mecânica de tiro a cada embate.'
          />
          <Text className={ styles.about__article__text }
                color='green'
                text='Abaixo temos informações básicas sobre os mapas,
                mas você pode checar mais detalhes na nossa página de mapas.'
          />
          <ImgTag src={ Guide5 } alt='Foto explicando sobre os mapas' />
          <Text className={ styles.about__article__text }
                color='green'
                text='Bom, talvez você já saiba como abater um inimigo de todas as maneiras possíveis, 
                mas o Brimstone sabe que a maioria chama atenção demais.'
          />
          <ImgTag src={ Guide6 } alt='Foto explicando para atiradores novator sobre ouvir, parar e combar' />
          <ImgTag src={ Guide7 } alt='Foto explicando sobre o clico tático' />
          <Text className={ styles.about__article__text }
                color='green'
                text='Chega de incertezas. Seu treinamento inicial foi concluído! 
                Mas, assim como você, nós também estamos só começando.'
          />
        </article>
      </section>
    </main>
    
  )
}

export default Sobre