import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import './SearchPage.css';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = query.get("q");
  const debounceSearchTerm = useDebounce(searchTerm, 500)

  const navigate = useNavigate();

  useEffect(() => {
    if(debounceSearchTerm) {
      fetchSerchMovie(debounceSearchTerm);
    }
  }, [debounceSearchTerm])
  
  const fetchSerchMovie = async (searchTerm) => {
    try{
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.results);
    } catch(error) {
      console.log(error);
    }
  }

  if(searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_typy !== "person") {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            return (
              <div className='movie' key={movie.id}>
                <div className='movie__colomn-poster' onClick={()=> navigate(`/${movie.id}`) }>
                  <img 
                    src={movieImageUrl}
                    alt={movie.title}
                    className='movie__poster'
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  } else {
    return (
      <section className='no-results'>
        <div className='no-result__text'>
          <p>
            검색한 "{searchTerm}"을 찾을 수 없습니다.
          </p>
        </div>
      </section>
    )
  }

}

export default SearchPage