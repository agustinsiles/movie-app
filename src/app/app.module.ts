import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesService } from "./services/movies.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule    
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
