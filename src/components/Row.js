import axios from '../api/axios'
import React, { useCallback, useEffect, useState } from 'react'
import './Row.css'
import MovieModal from '../MovieModal'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'

//swiper css
import'swiper/css'
import'swiper/css/navigation'
import'swiper/css/pagination'
import'swiper/css/scrollbar'
import'swiper/css/a11y'

const Row = ({ title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  const fetchMovieData = useCallback( async () => {
    const requests = await axios.get(fetchUrl);
    setMovies(requests.data.results);
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        //install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{ 
          1378: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          998: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          625: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1
          }
        }}
      >
        <Contents id={id}>

        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Wrap>
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </Wrap>
          </SwiperSlide>
          ))}
        </Contents>
      </Swiper>
      {modalOpen && 
      <MovieModal
        {...movieSelected}
        setModalOpen={setModalOpen}
      />}
    </Container>
  )
}

export default Row

const Container = styled.div`
  padding: 0 0 26px;
`;
const Contents = styled.div``;
const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top:56.25%;
  border-radius: 10px;
  box-shadow: rgba(0,0,0, .69) 0 26px 30px -10px,
              raba(0,0,0, .73) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all.3s cubic-bezier(.25,.46,.45,.94) 0s;
  border: 3px solid rgba(249,249,249,.1);
  
  img{
    position: absolute;
    inset: 0;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    transition: all.5s ease-in-out;
    z-index: 1;
  }
  &:hover{
    box-shadow: rgba(0,0,0,.8) 0 40px 58px -16px,
              raba(0,0,0,.72) 0 30px 22px -10px;
    transform: scale(.98);
    border-color: rgba(249,249,249,.8);
  }
`;