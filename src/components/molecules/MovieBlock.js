import React from "react";
import MovieBlockLarge from "../atoms/MovieBlockLarge";
import MovieBlockSmall from "../atoms/MovieBlockSmall";

function MovieBlock({
  movieId,
  movieImgSrc,
  movieName,
  onClickFunction,
  isLargeRow,
  index
}) {
  const blockData = {
    isLargeRow,
    movieId,
    movieImgSrc,
    movieName,
    onClickFunction,
    index
  };

  return (
    <>
      {isLargeRow ? (
        <MovieBlockLarge {...blockData} />
      ) : (
        <MovieBlockSmall {...blockData} />
      )}
    </>
  );
}

export default MovieBlock;
