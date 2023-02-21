import React from 'react'
import requests from '../../api/requests'
import Banner from '../../components/Banner'
import Category from '../../components/Category'
import Nav from '../../components/Nav'
import Row from '../../components/Row'
import styled from'styled-components'

const MainPage = () => {
  return (
    <Contaniner>
      <Nav/>
      <Banner/>
      <Category/>
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </Contaniner>
  )
}

export default MainPage

const Contaniner = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vh + 5px);

  &:after {
    content: '';
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
  `