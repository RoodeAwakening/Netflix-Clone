import React from 'react'
import MovieBlockLarge from "../atoms/MovieBlockLarge";
import MovieBlockSmall from "../atoms/MovieBlockSmall";
import SectionTitles from '../atoms/SectionTitles';

import './Organisms.css'

function MovieRow(  
 { movies,
  movieId,
  movieImgSrc,
  movieName,
  onClickFunction,
  isLargeRow,
  sectionTitle}
  ) {

const handleClick = () =>{
  console.log("handleClick");
}

  return (
    <div className="row">
      <SectionTitles title={sectionTitle}/>

      <div className="row__images-container">
      {movies.map((movie)=>{
        console.log("movie",movie);
        return (
          <>
          {isLargeRow ? (
            <MovieBlockLarge 
            movieId={movie.id}
            movieImgSrc={movie.poster_path}
            movieName={movie.name}
            onClickFunction={()=> {handleClick(movie)}}
              />
          ) : (
            <MovieBlockSmall 
            movieId={movie.id}
            movieImgSrc={movie.poster_path}
            movieName={movie.name}
            onClickFunction={()=> {handleClick(movie)}}
            />
          )}
          </>)
        })}
       
        </div>



    </div>
    
  )
}

export default MovieRow
