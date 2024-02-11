import React from "react";
import './style.css'

function MovieCarrousel({sectionTitle, movies}) {
    return (
        <div className="movieCarrousel">
            <h2>{sectionTitle}</h2>
            <div className="movieCarrousel--listArea">
                <div className="movieCarrousel--list">
                    { movies.results.length > 0 && movies.results.map((movie, key) => (
                        <div key={key} className="movieCarrousel--item">
                            <img src={ `${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/t/p/w300${movie.poster_path}` } alt={movie.title} key={key}/>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default MovieCarrousel