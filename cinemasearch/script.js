document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();
    const btnSearch = document.querySelector('button');
    btnSearch.addEventListener("click", e => {
        e.preventDefault();
        
        const start_date = document.getElementById('start_date');
        const end_date = document.getElementById('end_date');
        const searchResults = document.getElementById('search-results');

        const url_movies = `https://api.nasa.gov/planetary/apod?api_key=dcn0sOfU0Se5StEL3ddLIEhV3TGYuTjWOsmXaRqa&start_date=${start_date.value}&end_date=${end_date.value}`;

        console.log(url_movies);

        xhr.open("GET", url_movies);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function() {
            if (200 != xhr.status) alert('Помилка 200');
            else {
                renderMovies(searchResults, xhr.response);
            }
        }
    });


    function renderMovies(targetElement, movies) {
         
        targetElement.innerHTML = '';

        const moviesContainer = document.createElement('div');
        moviesContainer.id = 'movies';
        moviesContainer.classList.add('card');
        moviesContainer.classList.add('card-img-top');
        moviesContainer.classList.add('card-text');
        moviesContainer.innerHTML = '';

          movies.forEach(movie => {
            moviesContainer.innerHTML += `


            <div class="card" style="width: 18rem;">
            <img src="${movie.url}" class="card-img-top" alt="${movie.copyright}">
            <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-title">${movie.explanation}</p>
            <a href="movie.html?date=${movie.date}" class="btn btn-primary" target="_blank">
            more...
            </a>
            <span id="date">${movie.date}</span
            </div>
          </div>

            `;  
          });

          targetElement.append(moviesContainer);
    }
});