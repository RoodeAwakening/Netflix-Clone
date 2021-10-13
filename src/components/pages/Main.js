import React from 'react'
import Banner from '../Banner'
import NavBar from '../NavBar'
import requests from '../../services/request'
import "./Main.css"
import MovieRow from '../organisms/MovieRow'


function Main() {
  const sections = [
    ["Trending", requests.fetchTrending, "isLargeRow" ],
    ["Netflix Originals",requests.fetchNetflixOriginals],
    ["Top Rated",requests.fetchTopRated],
    ["Action Movies",requests.fetchActionMovies],
    ["Comedy Movies",requests.fetchComedyMovies],
    ["Horror Movies",requests.fetchHorrorMovies],
    ["Romance Movies",requests.fetchRomanceMovies],
    ["Documentaries",requests.fetchDocumentaries]

  ]
  return (
    <div className="main__container">
   
      <NavBar/>
      <Banner />
      {sections.map(([title, endpoint, isLargeRow]) => (
        <MovieRow
        sectionTitle={title}
        fetchUrl={endpoint}
        isLargeRow={isLargeRow}
        />
      ))}


      

    </div>
   
  )
}

export default Main
