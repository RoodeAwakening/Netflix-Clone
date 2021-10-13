import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../.././services/axios";
import movieTrailer from "movie-trailer";
import MovieBlockLarge from "../atoms/MovieBlockLarge";
import MovieBlockSmall from "../atoms/MovieBlockSmall";
import SectionTitles from "../atoms/SectionTitles";

import "./Organisms.css";

function MovieRow({ fetchUrl, isLargeRow, sectionTitle }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let getData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request?.data?.results);
    };
    getData();
  }, [fetchUrl]);

  const opts = {
    height: "400",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          console.log("url", url);
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          // this will search the url passed in and get the value of v
          // in this case it would return  XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParams", urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("error--->", error));
    }
  };

  return (
    <div className="row">
      <SectionTitles title={sectionTitle} />

      <div className="row__images-container">
        {movies.map((movie) => {
          return (
            <>
              {isLargeRow ? (
                <MovieBlockLarge
                  movieId={movie.id}
                  movieImgSrc={movie.poster_path}
                  movieName={movie.name}
                  onClickFunction={() => {
                    handleClick(movie);
                  }}
                />
              ) : (
                <MovieBlockSmall
                  movieId={movie.id}
                  movieImgSrc={movie.poster_path}
                  movieName={movie.name}
                  onClickFunction={() => {
                    handleClick(movie);
                  }}
                />
              )}
            </>
          );
        })}
      </div>

      <div className="movie__trailers">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default MovieRow;
