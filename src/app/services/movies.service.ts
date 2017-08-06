import { Injectable } from '@angular/core';
import { movies } from './../data/movie.mock-data';

@Injectable()
export class MoviesService {
  
  getMovies() {
    return movies;
  }

  getMovieById(id) {
    for (let movie of movies) {
      if (movie.id === id) return movie;
    }
  }

  getMoviesByFilter(filter) {
    const result = [];

    for (let movie of movies) {
      const movieName = movie.name.toLowerCase();
      if (movieName.indexOf(filter.toLowerCase()) > -1) {
        result.push(movie);
      }
    }

    return result;
  }
}
