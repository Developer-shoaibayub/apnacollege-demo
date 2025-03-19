<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Netflix Clone</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Navbar -->
  <div class="navbar">
    <img class="navbar__logo" src="assets/logo.png" alt="Netflix Logo" />
    <img class="navbar__avatar" src="assets/avatar.png" alt="User Avatar" />
  </div>

  <!-- Banner Section -->
  <header class="banner">
    <img class="banner__image" src="assets/banner.jpg" alt="Netflix Banner">
    <div class="banner__contents">
      <h1 class="banner__title">Stranger Things</h1>
      <div class="banner__buttons">
        <button class="banner__button">Play</button>
        <button class="banner__button">My List</button>
      </div>
      <h1 class="banner__description">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</h1>
    </div>
    <div class="banner__fadeBottom"></div>
  </header>

  <!-- Movie Sections -->
  <section class="movie-row">
    <h2>Trending Now</h2>
    <div class="movie-row__posters" id="trending-now"></div>
  </section>

  <section class="movie-row">
    <h2>Top Rated</h2>
    <div class="movie-row__posters" id="top-rated"></div>
  </section>

  <section class="movie-row">
    <h2>Action Movies</h2>
    <div class="movie-row__posters" id="action-movies"></div>
  </section>

  <section class="movie-row">
    <h2>Comedy Movies</h2>
    <div class="movie-row__posters" id="comedy-movies"></div>
  </section>

  <section class="movie-row">
    <h2>Horror Movies</h2>
    <div class="movie-row__posters" id="horror-movies"></div>
  </section>

  <section class="movie-row">
    <h2>Romance Movies</h2>
    <div class="movie-row__posters" id="romance-movies"></div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>Netflix Clone &copy; 2025</p>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #111;
  color: white;
  overflow-x: hidden;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.navbar__logo {
  width: 100px;
}

.navbar__avatar {
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
}

/* Banner Section */
.banner {
  position: relative;
  height: 448px;
}

.banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3);
}

.banner__contents {
  position: absolute;
  top: 20%;
  left: 30px;
  z-index: 100;
}

.banner__title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.banner__buttons {
  display: flex;
}

.banner__button {
  background-color: #e50914;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
}

.banner__button:hover {
  background-color: #f40612;
}

.banner__description {
  font-size: 1.2rem;
  width: 45%;
  line-height: 1.5;
}

.banner__fadeBottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 7.4rem;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

/* Movie Row */
.movie-row {
  margin-left: 20px;
  margin-top: 20px;
}

.movie-row h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.movie-row__posters {
  display: flex;
  overflow-x: scroll;
  padding: 10px;
}

.movie-row__posters::-webkit-scrollbar {
  display: none;
}

.movie-card {
  position: relative;
  margin-right: 10px;
}

.movie-card img {
  width: 100%;
  height: 225px;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s;
}

.movie-card:hover img {
  transform: scale(1.05);
}

.movie-card__info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s;
}

.movie-card:hover .movie-card__info {
  opacity: 1;
}

.movie-card__info h1 {
  color: white;
  font-size: 1.5rem;
  margin-top: 10px;
}

.movie-card__buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.movie-card__button {
  background-color: #e50914;
  border: none;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
}

.movie-card__button:hover {
  background-color: #f40612;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
  background-color: #111;
  color: #bbb;
}
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
});
