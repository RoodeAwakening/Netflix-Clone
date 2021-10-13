import React from 'react'

import BannerDescription from '../atoms/BannerDescription'
import BannerTitle from '../atoms/BannerTitle'
import BannerButtons from './BannerButtons'

import './Molecules.css'

function BannerContents({movie}) {
  return (
    <div className="banner__contents">
      <BannerTitle movie={movie}/>
      <BannerButtons/>
      <BannerDescription movie={movie}/>
      
    </div>
  )
}

export default BannerContents
