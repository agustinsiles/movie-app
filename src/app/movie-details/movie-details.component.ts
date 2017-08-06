import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any = {};
  cover: String = '';
  rate: Array<any> = [];
  rateDifference: Array<any> = [];
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.movie = this.moviesService.getMovieById(+params['id']);
        this.cover = `assets/images/movie-covers/${this.movie.img}`;
        this.rate = Array(Math.round(this.movie.rate));
        this.rateDifference = Array(10 - Math.round(this.movie.rate));
      }
    )
  }
}
