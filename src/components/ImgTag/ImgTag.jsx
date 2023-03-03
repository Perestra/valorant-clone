import React from 'react'

const ImgTag = ({ src, alt, className }) => {
  return (
    <img src={ src } alt={ alt } className={ className }/>
  )
}

export default ImgTag