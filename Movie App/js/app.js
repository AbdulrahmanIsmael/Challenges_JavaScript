// define dom variables
const searchInp = document.getElementById("search");
const mainContent = document.querySelector("#main-content > .container");

// define API variables
const API_url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=28364a82e2f91a682189b8d7e8fcfb62";
const API_search =
  "https://api.themoviedb.org/3/search/movie?api_key=28364a82e2f91a682189b8d7e8fcfb62&query=";
const image_url = "https://image.tmdb.org/t/p/w1280";

// functions
async function getData(url) {
  const fetchData = await fetch(url);
  const data = await fetchData.json();

  addMovies(data.results);
}

function addMovies(movies) {
  mainContent.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieDesc = `
        <div class="main-content-movie">
          <img
            src="${image_url + poster_path}"
            alt=""
            class="movie-image"
          />

          <div class="movie-rating">
            <h1 class="name">${title}</h1>
            <span class="rating ${getRatingColor(
              vote_average
            )}">${vote_average}</span>
          </div>

          <div class="movie-info">
            <h2>Overview</h2>
            <p class="movie-info-story">
              ${overview}
            </p>
          </div>
        </div>
    `;

    mainContent.innerHTML += movieDesc;
  });
}

function getRatingColor(vote) {
  if (vote >= 8.0) {
    return "good";
  } else if (vote < 8.0 && vote >= 7.0) {
    return "intermediate";
  } else {
    return "bad";
  }
}

searchInp.addEventListener("keyup", (e) => {
  if (searchInp.value && searchInp.value !== "") {
    getData(API_search + e.target.value);
  } else {
    getData(API_url);
  }
});

//invokation functions
getData(API_url);
