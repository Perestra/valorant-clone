import React from 'react'
import ValorantAboutVideo from '../../assets/videos/valorant_about.mp4'
import styles from './VideoTag.module.scss'

const VideoTag = () => {
  return (
    <div className={ styles.play }>
      <video className={ styles.play__video } preload="true" autoPlay muted loop controls >
        <source src={ ValorantAboutVideo } type='video/mp4'/>
      </video>
    </div>
    
  )
}

export default VideoTag