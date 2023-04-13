import React from 'react'

const VideoTag = ({ className, poster, src }) => {
  return (
    <video 
      className={ className } 
      autoPlay 
      preload="true" 
      muted 
      loop 
      playsinline
      poster={ poster }
      src={ src } 
    >
    </video>
  )
}

export default VideoTag