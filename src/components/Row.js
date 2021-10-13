import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube'
import Titles from '../atoms/Titles'
import axios from '../services/axios'
import movieTrailer from 'movie-trailer'
import './Row.css'


function Row({sectionTitle, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const baseImgUrl = "https://image.tmdb.org/t/p/original/"

  useEffect(()=>{
    let getData = async () =>{
      const request = await axios.get(fetchUrl)
      setMovies(request?.data?.results)
    }
    getData()

  },[fetchUrl])

  const opts = {
    height: "400",
    // width: "400",
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (movie) =>{
    if (trailerUrl){
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
      .then((url) =>{
        console.log("url",url);
        // https://www.youtube.com/watch?v=XtMThy8QKqU
        // this will search the url passed in and get the value of v 
        // in this case it would return  XtMThy8QKqU
        const urlParams = new URLSearchParams( new URL(url).search)
        console.log('urlParams',urlParams);
        setTrailerUrl(urlParams.get('v'))
      })
      .catch((error) => console.log("error--->",error))
    }

  }

  return (
    <div className="row">
      <h2>{sectionTitle}</h2>

      <div className="row__images-container">
        {movies.map((movie)=>{
          console.log("movie",movie);
          return (
            <img 
            onClick={()=>handleClick(movie)}
            key={movie.id}
            className={`row__images ${isLargeRow && "row__images-Large"}` }
            src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
          )
        })}
      </div>
      <div className="movie__trailers">

{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Row
