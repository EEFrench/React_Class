  
// This is a global variable to be re-used throughout this file (more than one
// API functions for the future).
const omdbURL = "http://www.omdbapi.com/";

export const getMovieByIDAPI = async (movieID) => {
  // Fetch the data first with the given URL.
  const fetchData = await fetch(
    `${omdbURL}?apikey=${process.env.REACT_APP_OMDB_API}&i=${movieID}`
  );
  // Then, convert the fetched data into JSON so JavaScript could read it.
  const jsonData = await fetchData.json();
  // Return that converted JSON data.
  return jsonData;
};