// define variables
const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");

// functions
async function getJoke() {
  let fetchJoke = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  let data = await fetchJoke.json();

  joke.innerHTML = data["joke"];
}

getJoke();

// addEventListener
jokeBtn.addEventListener("click", getJoke);
