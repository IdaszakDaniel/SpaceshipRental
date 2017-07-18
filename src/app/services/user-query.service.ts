import { Injectable } from '@angular/core';

@Injectable()
export class UserQueryService {
  date:any[];
  pickup:string;
  dropoff:string;
  seats:number;
  cannon:string;
  maxAcc:number;
  atmSpeed:number;

  constructor() { }

  setName(date, pickup, dropoff, seats, cannon, maxAcc, atmSpeed){
  	this.date = date;
  	this.pickup = pickup;
  	this.dropoff = dropoff;
  	this.seats = seats;
  	this.cannon = cannon;
  	this.maxAcc = maxAcc;
  	this.atmSpeed = atmSpeed;
  }

  getName(){
  	return this.date;
  }



}
