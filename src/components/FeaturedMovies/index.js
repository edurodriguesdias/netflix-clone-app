import React from "react";
import './style.css'

// eslint-disable-next-line 
export default ({item}) => {

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
            backgroundImage: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--infos">
                        <div className="featured--ranking">
                            { Math.round(item.vote_average) * 10 }% relevante
                        </div>
                        <div className="featured--year">
                            {labelDate}
                        </div>
                        <div className="featured--seasons">
                            {labelSeasonsNumber} {labelSeasons}
                        </div>
                    </div>

                    <div className="featured--description">
                        <div className="featured--description">
                            {`${item.overview.substring(0, 200)}...`}
                        </div>
                        <div className="featured--genres">
                            <p>{genres.join(', ')}</p>
                        </div>                        
                    </div>
                    <div className="featured--action">
                        <div className="featured--buttons">
                            <a className="featured--watchbutton" href="http://google.com">Assistir</a>
                            <a className="featured--moreinfobutton"href="http://google.com">Mais informações</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}