import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Agent.module.scss'
import agents from 'json/agents.json'

import VideoTag from 'components/VideoTag/VideoTag'
import NavAgents from 'components/NavAgents/NavAgents'
import ImgTag from 'components/ImgTag/ImgTag'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'

import SubTitle from 'components/SubTitle/SubTitle'
import NavSkills from 'components/NavSkills/NavSkills'

const Agent = () => {

    const rote = useParams()
    const agent = agents.find(agent => {
        return agent.name.toLowerCase() === rote.agent
    })
    
    const createHability = useCallback(position => {
        const { name, slot, video, description } = agent.skills[position] 
        return { name, slot, video, description }
    }, [agent])

    const [habilities, setHabilities] = useState(createHability(0))

    useEffect(() => {
        setHabilities(createHability(0))
    }, [rote, createHability])

  return (
    <main className={ styles.main }>
        <section className={ styles.main__nav }>
            <VideoTag 
                className={styles.main__bgVideo} 
                poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG"
                src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4" 
            />
            <div className={styles.main__agent}>
                <NavAgents agents={ agents } />
                <ImgTag className={styles.main__agentImg} src={ agent.image } alt={ agent.name } />
                <div className={ styles.main__agentContent } >
                    <div className={ styles.main__agentRole }>
                        <Text 
                            className={ styles.main__agentRole__title } 
                            text='// Função' 
                            color='white'
                        />
                        <div className={ styles.main__agentRole__content }>
                            <Title 
                                className={ styles.main__agentRole__name } 
                                text= { agent.role[0].name }
                                color='white'
                            />
                            <ImgTag className={ styles.main__agentRole__image } src={ agent.role[0].icon } alt={ agent.role[0].name } />
                        </div>
                    </div>
                    <div className={ styles.main__agentBiography } >
                        <Text 
                            className={ styles.main__agentBiography__title } 
                            text='// Biografia' 
                            color='white'
                        />
                        <Text 
                            className={ styles.main__agentBiography__text } 
                            text={ agent.biography } 
                            color='white'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className={ styles.main__habilities }>
            <div className={ styles.main__habilities__container }>
                <Title 
                    className={ styles.main__habilities__title } 
                    text='Habilidades especiais' 
                    color='blue' 
                />
                <div className={ styles.main__habilities__content }>
                    <div className={ styles.main__habilities__items }>
                        <NavSkills 
                            agent={ agent } 
                            setHability={ index => setHabilities(createHability(index)) } 
                        />
                        <div className={ styles.main__habilities__texts }>
                            <SubTitle 
                                className={ styles.main__habilities__name }
                                text={ `${ habilities.slot } - ${ habilities.name }` }
                                color='green'
                            />
                            <Text 
                                className={ styles.main__habilities__description } 
                                text={ habilities.description }
                                color='green'
                            />
                        </div>
                    </div>
                    <VideoTag 
                        className={ styles.main__habilities__video }
                        src={ habilities.video }
                    />
                </div>
            </div>
        </section>
    </main>
 )
}

export default Agent