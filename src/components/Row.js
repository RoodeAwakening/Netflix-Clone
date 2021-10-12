import React, {useState, useEffect} from 'react'
import Titles from '../atoms/Titles'
import axios from '../services/axios'
import './Row.css'


function Row({sectionTitle, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([])
  const baseImgUrl = "https://image.tmdb.org/t/p/original/"

  useEffect(()=>{
    let getData = async () =>{
      const request = await axios.get(fetchUrl)
      setMovies(request?.data?.results)
    }
    getData()

  },[fetchUrl])

  return (
    <div className="row">
      <h2>{sectionTitle}</h2>

      <div className="row__images-container">
        {movies.map((movie)=>{
          return (
            <img 
            key={movie.id}
            className={`row__images ${isLargeRow && "row__images-Large"}` }
            src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
          )
        })}
      </div>

    </div>
  )
}

export default Row
