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
      type="video/mp4"
    >
    </video>
  )
}

export default VideoTag