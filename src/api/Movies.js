const getMovieData = async (path) => {
    const req = await fetch(`${process.env.REACT_APP_TMDB_BASE_URI}${path}?language=pt-BR&api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    return await req.json()
}

async function getMovies() {
    return [
        /** CATEGORIES */
        {
            slug: 'original',
            title: 'Originais do Netflix',
            movies: await getMovieData('/3/discover/tv')
        },
        {
            slug: 'trending',
            title: 'Em Alta',
            movies: await getMovieData('/3/trending/all/week')
        }        
    ]
}

async function getMovieById(movieId, movieType) {
    return await getMovieData(`/3/${movieType}/${movieId}`)
}

export { getMovies, getMovieById }