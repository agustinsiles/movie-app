import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesService } from "./../services/movies.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Array<any> = [];
  filter: String = '';

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.movies = params['filter'] ? 
          this.moviesService.getMoviesByFilter(params['filter']) : this.moviesService.getMovies();
      }
    )
  }

  filterList() {
    this.router.navigate(['/movie-list', this.filter]);
  }
}
