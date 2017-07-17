import { Component, OnInit } from '@angular/core';
import { UserQueryService } from '../../services/user-query.service';

@Component({
  selector: 'app-list-cmp',
  templateUrl: './list-cmp.component.html',
  styleUrls: ['./list-cmp.component.sass']
})

export class ListCmpComponent implements OnInit {

  constructor(public userQueryService:UserQueryService) {
  	console.log(userQueryService.getName()); 
  }

  ngOnInit() {
  }

}
