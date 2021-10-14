import React from 'react'

function MovieBlockLarge({movieId, movieImgSrc, movieName, onClickFunction,index}) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original/"
  return (
      <img
        data-testid={`large-movie-block-${index+1}`}
        className='row__images row__images-Large'
        key={movieId}
        src={`${baseImgUrl}${movieImgSrc}`}
        alt={movieName}
        onClick={onClickFunction}
      />
  )
}

export default MovieBlockLarge
