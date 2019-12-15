import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Theaters} from '../../interface/theaters';
import { FilterTheater } from '../../interface/filter-theater';
import { TheaterService } from '../../service/theater.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  filters: FilterTheater[];
  selectedDate: string;
  selectedTheaterId:string;
  theatersArr: any = [];
  Employee: any = [];
  constructor(private theaterService: TheaterService, private http: HttpClient) { }

  lstTheaters: Theaters[];

  ngOnInit() {
    this.getFilters();
  }

  // get filters value, text to display
  getFilters() {
	  
	  this.http.get('http://192.168.43.128:8080/api/list').subscribe(data => {
      // Read the result field from the JSON response.get response
      this.lstTheaters=data;
    })
   
  }


 

  // change filter
  changeFilter(id: number) {
	  this.selectedTheaterId=id;
    this.http.get('http://192.168.43.128:8080/api/getMasterData').subscribe(data => {
      // Read the result field from the JSON response.get response
     let selectedTheaterMovies=data.filter(obj=>{
		 return obj.theaterId==id;
	 });
	 this.selectedDate=selectedTheaterMovies;
	 
    })
  }

  // date to string mm/dd/yyyy
  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }
}
