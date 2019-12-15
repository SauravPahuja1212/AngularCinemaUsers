import { Component, OnInit } from '@angular/core';
//import {ApiService} from "../core/api.service";
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss']
})
export class UserhistoryComponent implements OnInit {
  UserHistorys:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.getUserHistory();
  }
  getUserHistory(){
	  this.http.get('http://192.168.43.128:8080/api/getUsers/1').subscribe(data => {
      // Read the result field from the JSON response.get response
      this.UserHistorys=data;
    })
  }

}
