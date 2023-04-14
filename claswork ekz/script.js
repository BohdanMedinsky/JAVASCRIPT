document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();
    const btnSearch = document.querySelector('button');
    btnSearch.addEventListener("click", e => {
        e.preventDefault();
        
        const keyword = document.getElementById('keyword');
        const movieType = document.querySelector('select#type');
        const searchResults = document.getElementById('search-results');

        const url_movies = `https://www.omdbapi.com/?s=${keyword.value}&type=${movieType.value}&r=json&apikey=ce292f1`;

        xhr.open("GET", url_movies);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function() {
            if (200 != xhr.status) alert('Response code is not 200 OK.');
            else {
                renderMovies(searchResults, xhr.response.Search)
            }
        }
    });

    function renderMovies(targetElement, movies) {
         
        targetElement.innerHTML = '';

        const moviesContainer = document.createElement('div');
        moviesContainer.id = 'movies';
        moviesContainer.classList.add('d-flex');
        moviesContainer.classList.add('justify-content-around');
        moviesContainer.classList.add('flex-wrap');
        moviesContainer.innerHTML = '';

          movies.forEach(movie => {
            moviesContainer.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <small>${movie.Type}</small>
                        <a href="movie.html?imdbID=${movie.imdbID}" class="btn btn-primary">
                        more...
                        </a>
                    </div>
                </div>
            `;  
          });

          targetElement.append(moviesContainer);
    }
});