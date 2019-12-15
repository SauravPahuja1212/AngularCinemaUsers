import { InMemoryDataService } from './service/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { JoinPipe } from './pipe/join.pipe';
import { MinutePipe } from './pipe/minute.pipe';
import { DayPipe } from './pipe/day.pipe';
import { DatabaseService } from './service/database.service';

import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SafePipe } from './pipe/safe.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesSliderComponent } from './component/movies-slider/movies-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UserhistoryComponent } from './component/userhistory/userhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    FrontpageComponent,
    JoinPipe,
    MinutePipe,
    DayPipe,
    MoviesListComponent,
    SafePipe,
    MoviesSliderComponent,
    UserhistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
   
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
