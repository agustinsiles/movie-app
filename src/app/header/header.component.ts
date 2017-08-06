import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./../services/movies.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  filter: String = '';
  constructor(private router: Router) {}

  filterList() {
    this.router.navigate(['/movie-list', this.filter]);
  }
}
