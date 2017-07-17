import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { UserQueryService } from '../../services/user-query.service';

@Component({
  selector: 'app-search-cmp',
  templateUrl: './search-cmp.component.html',
  styleUrls: ['./search-cmp.component.sass']
})
export class SearchCmpComponent implements OnInit {
  
  data:any[];	
  name:string;
  userQuery;
  
  constructor(public resourceService:ResourceService, userQueryService:UserQueryService) { 
  	this.resourceService.getData().subscribe(users => {
  		console.log(users);
  		this.data = users;
  	});
    this.userQuery = userQueryService;
  }

  ngOnInit() {
  }

  setQuery() {
  	this.userQuery.setName(this.name);
  }

}
