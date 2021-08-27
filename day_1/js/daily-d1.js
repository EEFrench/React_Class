//MOVIE SEARCH BY NAME
// const apiKey = '9edc6423'
// const getMoviesBySearchTerm = async (movie) => {
//   try {
//     let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`);
//     let movieName = await response.json();
//     console.log(`The movie results for ${movie}`, movieName);
//   } catch(error) {
//     console.log("ERROR:", error)
//   }
// }

// let search = prompt('Movie Name:');
// getMoviesBySearchTerm(search)
//let search = input.value;
//button.addEventListener('click', getMoviesBySearchTerm(search))


//MOVIE SEARCH BY ID
const apiKey = '9edc6423'
const getMoviesById = async (movie) => {
  try {
    let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${search}`);
    let movieName = await response.json();
    console.log(`The movie results for ${movie}`, movieName);
  } catch(error) {
    console.log("ERROR:", error)
  }
}

let search = prompt('Movie ID Number:');
getMoviesById(search)