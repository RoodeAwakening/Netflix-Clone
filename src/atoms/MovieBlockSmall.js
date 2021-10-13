import React from 'react'
import './Atoms.css'

function MovieBlockSmall({movieId, movieImgSrc, movieName, onClickFunction}) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original/"
  return (
      <img
        className='row__images'
        key={movieId}
        src={`${baseImgUrl}${movieImgSrc}`}
        alt={movieName}
        onClick={onClickFunction}
      />
  )
}

export default MovieBlockSmall
