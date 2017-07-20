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
  price:number;
  packInsurance:number;
  packLaser:number;
  insuranceToggle:boolean = false;
  laserToggle:boolean = false;

  constructor(public detailsService:DetailsService) { 
  	this.details = detailsService;
  }

  ngOnInit() {
  	this.item = this.details.getItem();
    this.price = 100;
  }

  setInsurance(){

    if( this.insuranceToggle ==  false) {
      this.price += 20;
      this.insuranceToggle = true;
    }else{
      this.price -= 20;
      this.insuranceToggle = false;
    }
  }

  setLaser(){
    if( this.laserToggle ==  false) {
      this.price += 50;
      this.laserToggle = true;
    }else{
      this.price -= 50;
      this.laserToggle = false;
    }
  }

}
