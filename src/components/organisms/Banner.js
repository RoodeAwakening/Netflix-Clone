import React, {useEffect, useState} from 'react'
import axios from '../../services/axios'
import requests from '../../services/request'

import BannerContents from '../molecules/BannerContents'

import './Organisms.css'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(()=>{
    let getData = async ()=>{
      const request = await axios.get(requests.fetchTrending)
      
      setMovie(request?.data?.results[Math.floor(Math.random() * request?.data?.results?.length -1)])
    }
    getData()
  },[])


  return (
   <header className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "top center"
    }}
    > 
<BannerContents movie={movie}/>
    <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner
