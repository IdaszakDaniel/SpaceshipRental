import { Component, OnInit } from '@angular/core';
import { UserQueryService } from '../../services/user-query.service';
import { ResourceService } from '../../services/resource.service';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-list-cmp',
  templateUrl: './list-cmp.component.html',
  styleUrls: ['./list-cmp.component.sass']
})

export class ListCmpComponent implements OnInit {

  data:any[] = [];	
  query:any;
  userQuery;
  details;
  queryBeginDate:any;
  queryEndDate:any;
  x:any;


  constructor(public resourceService:ResourceService, userQueryService:UserQueryService, detailsService:DetailsService) {
    this.userQuery = userQueryService;
    this.details = detailsService;
    this.query = this.userQuery.getName();

    if(this.query.beginDate != undefined){
      this.queryBeginDate = new Date(this.query.date.beginDate.year, this.query.date.beginDate.month, this.query.date.beginDate.day);
      this.queryEndDate = new Date(this.query.date.beginDate.year, this.query.date.beginDate.month, this.query.date.beginDate.day);
    }

  	this.resourceService.getData().subscribe(users => {
  		this.data = users;
  	});
  	
  }

  ngOnInit() {
  }

  pickSpaceship(item){
    this.details.setItem(item);
  }

}
