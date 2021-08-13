
// const searchTerm = 'batman'

// const getMoviesBySearchTerm = () => {
//     fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
//     .then((res) => res.json())
//     .then((movieData) => console.log(movieData)) 
// }




//MOVIE SEARCH BY NAME
const apiKey = 'ADD API'
const getMoviesBySearchTerm = async (movie) => {
  try {
    let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`);
    let movieName = await response.json();
    console.log(`The movie results for ${movie}`, movieName);
    console.log('This is the last line of code in this function');
  } catch(error) {
    console.log("ERROR:", error)
  }
}
let search = input.value;
//let search = prompt('Movie Name:');
//getMoviesBySearchTerm(search)
button.addEventListener('click', getMoviesBySearchTerm(search))


//MOVIE SEARCH BY ID
// const apiKey = 'ADD API'
// const getMoviesById = async (movie) => {
//   try {
//     let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${search}`);
//     let movieName = await response.json();
//     console.log(`The movie results for ${movie}`, movieName);
//     console.log('This is the last line of code in this function');
//   } catch(error) {
//     console.log("ERROR:", error)
//   }
// }

// let search = prompt('Movie ID Number:');
// getMoviesById(search)