import React from 'react'

const VideoTag = ({ className, src }) => {
  return (
    <video
      className={ className } 
      src={ src }
      autoPlay
      loop
      muted
      playsInline
    >
    </video>
  )
}

export default VideoTag