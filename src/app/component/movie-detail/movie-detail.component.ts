import { Movie } from './../../interface/movie';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DatabaseService } from './../../service/database.service';
import { SlotsService } from '../../service/slots.service';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  showAllTimes = false;
  modalRef: BsModalRef;
  slot: number;
  showErrorMessage = false;

  constructor(
    private slots: SlotsService,
    private route: ActivatedRoute,
    private db: DatabaseService,
    private modalService: BsModalService,
    private http: HttpClient,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getMovie();
    this.slots.getAll().subscribe(data => {
      this.slot = data;
    });
  }

  onClickSubmit(data) {
      this.showErrorMessage = true;
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.db.getMovie(id).subscribe(movie => this.movie = movie);
  }

  getBackdropUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.backdrop);
  }

  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }
}
