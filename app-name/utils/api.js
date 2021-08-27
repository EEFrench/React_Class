//https://www.omdbapi.com/?apikey=[yourkey]&
const ombdURL = 'https://www.omdbapi.com/'

export const getMoviesByIDAPI = async (movieID) => {
    const movieData = await fetch(`${ombdURL}?apikey=${process.env.REACT_APP_OMBD_API}&i=${movieID}`);
    const jsonData = movieData.json();
    return jsonData'
}

