import "./App.css";
import MovieCard from "./components/MovieCard";
import { getMovieByIDAPI } from "./utils/api";

function App() {
  // Initialize movieData as an empty object because the data will be returned as
  // an empty object.
  let movieData = {};
  // This would be used to render out the MovieCard component, and to let the browser
  // know that the movieData variable has been stored (So there would be no errors).
  let isMovieData = false;

  // Window.onload means that it runs when the page refreshes, or if it gets visited.
  // This is one way of getting the data without using advance React.js techniques.
  window.onload = async () => {
    // Get the movieAPI with a ID from Guardians of the Galaxy. Await is being used
    // since getMovieByIDAPI returns a promise, and so we must fulfill that promise
    // by using await.
    const movieAPI = await getMovieByIDAPI("tt3896198");
    // The only way, for now, to get the data without it being disappeared is to
    // store it as a cookie. You must use JSON.stringify in order to transform the
    // the JavaScript Object into a string, or there might be errors.
    sessionStorage.setItem("movieData", JSON.stringify(movieAPI));
  };

  // Check to see if this cookie exist before doing anything. If you don't check,
  // then errors would appear because it hasn't exist yet.
  if (sessionStorage.getItem("movieData")) {
    // Now, we could get the movieData from the cookie in your browser, and store it.
    movieData = JSON.parse(sessionStorage.getItem("movieData"));
    // Set this to true so we could let React know that we do have a movieData, and
    // we could render out the MovieCard component without errors.
    isMovieData = true;
  }

  console.log(movieData);

  return (
    <div className="App">
      {/* Check if the movieData exists. Without this check, there... */}
      {/* ...would be errors because movieData has nothing from line 8. */}
      {isMovieData ? (
        <MovieCard
          title={movieData.Title}
          type={movieData.Type}
          posterUrl={movieData.Poster}
        />
      ) : (
        "Hello"
      )}
    </div>
  );
}

export default App;