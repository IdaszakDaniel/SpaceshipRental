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

  constructor(public resourceService:ResourceService, userQueryService:UserQueryService) {
  	this.resourceService.getData().subscribe(users => {
  		this.data = users;
  	});
  	this.userQuery = userQueryService;
  }

  ngOnInit() {
    this.query = this.userQuery.getName();
    console.log(this.query)
  }

}
