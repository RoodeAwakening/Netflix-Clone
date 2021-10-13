import React from 'react'
import './Atoms.css'

function BannerDescription({movie}) {
  const truncate = (str, n)=>{
    return str?.length > n ? str.substr(0, n - 1 ) + "..." : str;
  }
  
  return (
    <h1 className="banner__description">
    {truncate(movie?.overview, 200)}
    </h1>
  )
}

export default BannerDescription
