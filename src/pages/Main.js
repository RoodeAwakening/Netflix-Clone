import React from 'react'
import Row from '../components/Row'
import requests from '../services/request'


function Main() {
  return (
    <div>
      <h2>Netflix Clone</h2>
      <Row sectionTitle={'Trending'} fetchUrl={requests.fetchTrending}/>
      <Row sectionTitle={'Top Rated'} fetchUrl={requests.fetchTopRated}/>
    </div>
  )
}

export default Main
