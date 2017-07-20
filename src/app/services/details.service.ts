import { Injectable } from '@angular/core';

@Injectable()
export class DetailsService {
  data:any;

  constructor() { }

  setItem(item) {
  	this.data = item;
  }

  getItem(){
  	return this.data;
  }

}
