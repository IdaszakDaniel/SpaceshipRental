import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-details-cmp',
  templateUrl: './details-cmp.component.html',
  styleUrls: ['./details-cmp.component.sass']
})
export class DetailsCmpComponent implements OnInit {
  details;
  item:any[];

  constructor(public detailsService:DetailsService) { 
  	this.details = detailsService;
  }

  ngOnInit() {
  	this.item = this.details.getItem();
  }

}
