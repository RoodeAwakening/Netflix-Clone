import React from "react";
import requests from "../../services/request";
import Banner from "../organisms/Banner";
import NavBar from "../molecules/NavBar";
import MovieRow from "../organisms/MovieRow";

import "./Templates.css";

function ContentPage() {
  const sections = [
    ["Trending", requests.fetchTrending, "isLargeRow"],
    ["Netflix Originals", requests.fetchNetflixOriginals],
    ["Top Rated", requests.fetchTopRated],
    ["Action Movies", requests.fetchActionMovies],
    ["Comedy Movies", requests.fetchComedyMovies],
    ["Horror Movies", requests.fetchHorrorMovies],
    ["Romance Movies", requests.fetchRomanceMovies],
    ["Documentaries", requests.fetchDocumentaries],
  ];

  return (
    <div className="main__container">
      <NavBar />
      <Banner />

      {sections.map(([title, endpoint, isLargeRow]) => (
        <MovieRow
          sectionTitle={title}
          fetchUrl={endpoint}
          isLargeRow={isLargeRow}
        />
      ))}
    </div>
  );
}

export default ContentPage;
