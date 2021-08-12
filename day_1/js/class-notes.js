// //Fetching data from text/json files on your own computer
// fetch('./src/readme.txt')
//   .then((response) => response.json())
//   .then((text) => console.log(text))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log('fetched the readme')
//   })

// fetch('./src/people.json')
//   .then((res) => res.json())
//   .then((people) => console.log(people));


// //Getting weather data using .then() chaining
// const getWeatherForCity = (city) => {
//     fetch(`https://goweather.herokuapp.com/weather/${city}`)
//       .then((res) => res.json())
//       .then((weather) => console.log(`The weather for ${city}`, weather))
//       .catch((error) => console.log("ERROR:", error));
  
//     console.log('This is the last line of code in this function');
//   }
  
//   let search = prompt('City name:');
//   getWeatherForCity(search)

  //Getting weather data using async and await
//   const getWeatherForCity = async (city) => {
//     try {
//       let response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
//       let weather = await response.json();
//       console.log(`The weather for ${city}`, weather);
//       console.log('This is the last line of code in this function');
//     } catch(error) {
//       console.log("ERROR:", error)
//     }
//   }
  
//   let search = prompt('City name:');
//   getWeatherForCity(search)

  //Getting a list of movies from OMDB API using a search term
  const apiKey = 'ADD API KEY HERE'
const searchTerm = 'batman'

fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
  .then((res) => res.json())
  .then((movieData) => console.log(movieData))

  //Getting detailed information about a movie from OMDB API using its id
//   const apiKey = 'ADD API KEY HERE'
// const movieID = 'tt0372784';

// fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`)
//   .then((res) => res.json())
//   .then((movieData) => console.log(movieData))

