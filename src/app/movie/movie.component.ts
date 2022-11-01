import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type {review, movie} from '../types/moviesTypes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  type='';
  id ='';
  url = '';
  movies: any;
  movieSelected: any;

  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    this.url = 'http://localhost:4200/assets/data/';
    this.setUrl();
    this.getMovie();
  }

  setUrl() {
    switch (this.type) {
      case 'trending':
        this.url += 'trending-movies.json';
        break;
      case 'popular':
        this.url += 'popular-movies.json';
        break;
      case 'theatre':
        this.url += 'theatre-movies.json';
        break;
    }
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      this.movieSelected = this.movies.find((movie:movie) => +movie.id === +this.id);
    });
  }

}
