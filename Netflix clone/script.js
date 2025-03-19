document.addEventListener('DOMContentLoaded', function () {
    const movieData = {
      trendingNow: [
        { title: "The Witcher", img: "https://image.tmdb.org/t/p/original/woZgIu1GXm5ZkYtI8QBG9dOepV.jpg" },
        { title: "Breaking Bad", img: "https://image.tmdb.org/t/p/original/1yeVJox3rPbm3U1X7lHkZJlT8iS.jpg" },
        { title: "Stranger Things", img: "https://image.tmdb.org/t/p/original/xV3pOVf2Sg25k79VjaU68Obw0pv.jpg" }
      ],
      topRated: [
        { title: "Inception", img: "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
        { title: "The Dark Knight", img: "https://image.tmdb.org/t/p/original/rSpXZsb5bMO1l1ZqZq1FzFz4fPb.jpg" },
        { title: "Interstellar", img: "https://image.tmdb.org/t/p/original/xZoW7p43Lro1yKnp0kzffzi9u5V.jpg" }
      ],
      actionMovies: [
        { title: "Mad Max: Fury Road", img: "https://image.tmdb.org/t/p/original/aXr0cOgP6FadA31n9gndgjQe5Z7.jpg" },
        { title: "The Avengers", img: "https://image.tmdb.org/t/p/original/ywcmHwrmDRg7eJv71z4b7kNly2u.jpg" }
      ]
    };
  
    function populateMovies(sectionId, movies) {
      const section = document.getElementById(sectionId);
      movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
          <img src="${movie.img}" alt="${movie.title}">
          <div class="movie-card__info">
            <h1>${movie.title}</h1>
            <div class="movie-card__buttons">
              <button class="movie-card__button">Play</button>
              <button class="movie-card__button">My List</button>
            </div>
          </div>
        `;
        section.appendChild(movieCard);
      });
    }
  
    // Populate sections with data
    populateMovies('trending-now', movieData.trendingNow);
    populateMovies('top-rated', movieData.topRated);
    populateMovies('action-movies', movieData.actionMovies);
  });
  