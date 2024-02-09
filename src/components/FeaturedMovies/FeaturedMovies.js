import React from "react";
import './FeaturedMovies.css'

const TMDB_BASE_URI='https://themoviedb.org'

export default ({item}) => {
    console.log(item)

    let labelSeasons = 'temporadas'
    let labelSeasonsNumber = item.seasons.length

    let date = new Date(item.first_air_date);
    let labelDate = date.getFullYear();
    let genres = item.genres.map((item) => {
        return item.name
    });

    if (item.seasons.length === 1) {
        labelSeasons = 'episódios'
        labelSeasonsNumber = item.seasons[0].episode_count
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${TMDB_BASE_URI}/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured-infos">
                        <div className="featured--ranking">
                            { Math.round(item.vote_average) * 10 }% relevante
                        </div>
                        <div className="featured--year">
                            {labelDate}
                        </div>
                        <div className="featured--seasons">
                            {labelSeasonsNumber} {labelSeasons}
                        </div>
                        <div className="featured--description">{ item.overview }</div>
                        <div className="featured--genres">
                            genres.forEach(name => {
                                
                            });
                            Genêros: {genres.join(' • ')}
                        </div>
                        <div className="featured--buttons">
                            <a href="">Assistir</a>
                            <a href="">Mais informações</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}