import React, { useEffect, useState } from "react";
import './App.css';

/**Components */
import MovieCarrousel from "./components/MovieCarrousel";
import FeaturedMovies from "./components/FeaturedMovies";
import Header from "./components/Header";

/** API */
import {getMovies, getMovieById} from "./api/Movies";

function App() {
  let [movieList, setMovieList] = useState([]);
  let [featuredMovieData, setFeaturedMovieData] = useState(null)
  let [darkScroll, setDarkScroll] = useState()

  useEffect(() => {
    const listMovies = async () => {
      let items = await getMovies()
      setMovieList(items)

      let originalsMovies = items.filter(item => item.slug === 'original');
      let randomMovieIndex = Math.floor(Math.random() * (originalsMovies[0].movies.results.length - 1))
      let randomMovie = originalsMovies[0].movies.results[randomMovieIndex]
      let featureMovie = await getMovieById(randomMovie.id, 'tv')

      setFeaturedMovieData(featureMovie);      
    }

    listMovies()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 3) {
        setDarkScroll(true);
      } else {
        setDarkScroll(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className="page">
      <Header darkScroll={darkScroll} />
      { featuredMovieData && <FeaturedMovies item={featuredMovieData} /> }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieCarrousel key={key} sectionTitle={item.title} movies={item.movies} />
        ))}
      </section>
    </div>
  );
}

export default App