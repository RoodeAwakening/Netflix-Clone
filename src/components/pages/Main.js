import React from 'react'
import Banner from '../Banner'
import NavBar from '../NavBar'
import Row from '../Row'
import requests from '../../services/request'
import "./Main.css"


function Main() {
  return (
    <div className="main__container">
      <NavBar/>
      <Banner />

      
      <Row sectionTitle={'Trending'} fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row sectionTitle={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row sectionTitle={'Top Rated'} fetchUrl={requests.fetchTopRated}/>
      <Row sectionTitle={'Action Movies'} fetchUrl={requests.fetchActionMovies}/>
      <Row sectionTitle={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies}/>
      <Row sectionTitle={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies}/>
      <Row sectionTitle={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies}/>
      <Row sectionTitle={'Documentaries'} fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Main