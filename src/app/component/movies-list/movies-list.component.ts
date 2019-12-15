import { DatabaseService } from './../../service/database.service';
import { Movie } from './../../interface/movie';
import { Component, OnInit, Input, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit, OnChanges {
  movies: Movie[];
  @Input() filterDate: any;
  modalRef: BsModalRef;

  constructor(private db: DatabaseService, private modalService: BsModalService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterDate']) {
      this.getMovies();
    }
  }

  // get playing movie based on filter date
  getMovies(): void {
    this.movies = this.filterDate;
  }
}
