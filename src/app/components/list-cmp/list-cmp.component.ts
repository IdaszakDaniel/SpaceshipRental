import { Component, OnInit } from '@angular/core';
import { UserQueryService } from '../../services/user-query.service';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-list-cmp',
  templateUrl: './list-cmp.component.html',
  styleUrls: ['./list-cmp.component.sass']
})

export class ListCmpComponent implements OnInit {

  data:any[] = [];	
  query:any;
  userQuery;
  queryBeginDate:any;
  queryEndDate:any;
  x:any;


  constructor(public resourceService:ResourceService, userQueryService:UserQueryService) {
    this.userQuery = userQueryService;
    this.query = this.userQuery.getName();

    this.queryBeginDate = new Date(this.query.date.beginDate.year, this.query.date.beginDate.month, this.query.date.beginDate.day);
    this.queryEndDate = new Date(this.query.date.beginDate.year, this.query.date.beginDate.month, this.query.date.beginDate.day);

  	this.resourceService.getData().subscribe(users => {
  		this.data = users;
  	});
  	
  }

  ngOnInit() {
  }

  pickSpaceship(x){
    console.log(x);
  }

}
