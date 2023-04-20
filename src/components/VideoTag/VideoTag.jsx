import React from 'react'
import ReactPlayer from 'react-player'

const VideoTag = ({ className, src }) => {
  return (
    <ReactPlayer 
      className={ className } 
      playing
      loop={ true }
      volume= { 1 }
      muted={ true }
      width='100%'
      height='auto'
      playsinline={ true }
      url={ src }
    />
  )
}

export default VideoTag