const TMDB_BASE_URI='https://api.themoviedb.org'
const TMDB_API_KEY="24ccad2030c7b5e4ca6400fe738e838a"

const getMovieData = async (path) => {
    const req = await fetch(`${TMDB_BASE_URI}${path}?language=pt-BR&api_key=${TMDB_API_KEY}`)
    return await req.json();
}

async function getMovies() {
    return [
        /** CATEGORIAS */
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

export default getMovies