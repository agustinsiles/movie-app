import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

const appRoutes: Routes = [{
	path: 'movie-list',
	component: MovieListComponent
}, {
	path: 'movie-details/:id',
	component: MovieDetailsComponent
}, {
	path: 'movie-list/:filter',
	component: MovieListComponent
}, { path: '',
	redirectTo: '/movie-list',
	pathMatch: 'prefix'
}];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
  	],
  	exports: [
		RouterModule
  	]
})
export class AppRoutingModule {}
