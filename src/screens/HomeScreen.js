import React from "react"
import Banner from "../Banner"
import './HomeScreen.css'
import Nav from "../Nav"
import requests from "../Requests"
import Row from "../Row"

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Actions" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries}/>
    </div>
    
  )
}

export default HomeScreen