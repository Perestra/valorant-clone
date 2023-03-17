import React from 'react'

const VideoTag = ({ className, poster, src }) => {
  return (
    <video 
      className={ className } 
      autoPlay 
      preload="true" 
      muted 
      loop 
      poster={ poster }
    >
      <source 
        src={ src } 
        type='video/mp4'
      />
    </video>
  )
}

export default VideoTag