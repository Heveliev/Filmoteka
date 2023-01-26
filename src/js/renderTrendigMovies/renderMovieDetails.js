export function renderMovieDetalis(movie, genres) {
  let movieGenres = [];
  const movieReleaseYear = movie.release_date.slice(0, 4);

  if (!movie.genre_ids.length) {
    return '';
  }

  for (let i = 0; i < movie.genre_ids.length; i++) {
    movieGenres.push(genres[movie.genre_ids[i]]);
  }

  if (movieGenres.length > 2) {
    return (
      movieGenres.splice(0, 2).join(', ') + ', Other | ' + movieReleaseYear
    );
  }

  return movieGenres.join(', ') + ' | ' + movieReleaseYear;
}
