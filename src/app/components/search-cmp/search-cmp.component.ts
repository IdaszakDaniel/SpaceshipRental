import { Component, OnInit } from '@angular/core';
import { UserQueryService } from '../../services/user-query.service';
import {IMyDrpOptions} from 'mydaterangepicker';

@Component({
  selector: 'app-search-cmp',
  templateUrl: './search-cmp.component.html',
  styleUrls: ['./search-cmp.component.sass']
})

export class SearchCmpComponent implements OnInit {
  
  name:string;
  pickUp:string[];
  dropOff:string[];
  seats:number[];
  cannons:string[];
  maxAcc:number[];
  atmosphericSpeed:number[];
  userQuery;
  userPickup:string;
  userDropoff:string;
  userSeats:number;
  userCannons:string;
  userAcc:number;
  userSpeed:number;

  
  constructor(userQueryService:UserQueryService) { 
    this.userQuery = userQueryService;
  }

  ngOnInit() {

    this.pickUp = ["Poznań","Wrocław","Warszawa"];
    this.dropOff = ["Poznań","Wrocław","Warszawa"];
    this.seats = [1,3,4];
    this.cannons = ["four single lasers","two twin lasers","three twin lasers","two quad lasers","ion cannon"];
    this.maxAcc = [3700, 5000, 1400, 3000, 2500];
    this.atmosphericSpeed = [1050, 1260, 850, 1000];
  }

  setQuery() {
  	this.userQuery.setName( this.model, 
                            this.userPickup,
                            this.userDropoff,
                            this.userSeats,
                            this.userCannons,
                            this.userAcc,
                            this.userSpeed );
  }

  private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd.mm.yyyy',
  };

  private model: Object = {beginDate: {year: 2018, month: 10, day: 9},
                             endDate: {year: 2018, month: 10, day: 19}};

}