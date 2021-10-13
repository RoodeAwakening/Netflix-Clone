import React from 'react'
import './Atoms.css'

function BannerTitle({movie}) {
  return (
    <h1 className="banner_title">
    {movie?.title || movie?.name || movie?.original_name}
  </h1>
  )
}

export default BannerTitle
