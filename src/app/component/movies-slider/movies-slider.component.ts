import { Movie } from './../../interface/movie';
import {HttpClient} from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.sass']
})
export class MoviesSliderComponent implements OnInit {
  @Input() limit: number;
  movies: Movie[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.http.get('http://192.168.43.128:8080/api/getMasterData').subscribe(data => {
      // Read the result field from the JSON response.get response
     this.movies=data;
	})
  }
}
