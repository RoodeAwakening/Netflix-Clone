import React from 'react'
import MyListButton from '../atoms/MyListButton'
import PlayButton from '../atoms/PlayButton'
import './Molecules.css'

function BannerButtons() {
  return (
    <div className="banner__buttons">
      <PlayButton/>
      <MyListButton/>
      
    </div>
  )
}

export default BannerButtons
