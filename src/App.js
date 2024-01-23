import React, { useEffect, useState } from "react";
import './App.css';

/**Components */
import MovieCarrousel from "./components/MovieCarrousel/MovieCarrousel";

/** API */
import getMovies from "./api/Movies";


function App() {
  let [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const listMovies = async () => {
      let items = await getMovies()
      setMovieList(items)
    }

    listMovies()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieCarrousel key={key} sectionTitle={item.title} movies={item.movies} />
        ))}
      </section>
    </div>
  );
}

export default App