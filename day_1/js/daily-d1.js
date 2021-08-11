// getMovieDetailsByName = () => {

// }

const request = fetch('./readme.txt');

request
    .then((response) => response.json())
    .then((text) => console.llog(text))
    .catch((error) => console.log(error))
    .finally(() => )