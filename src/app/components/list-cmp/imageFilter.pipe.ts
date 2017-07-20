import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
	a:any[];
	b:any[];
    yy:any;
  transform(items: any[], begin:any, end:any, pickup:any, dropoff:any, cannon:any, maxAcc:number, atmSpeed:number, arg1:number): any {

    (begin != undefined) ? this.a =  items.filter(item => new Date(item.availability[2],item.availability[1],item.availability[0]) <= begin) : this.a = items;

    (end != undefined) ? this.b =  this.a.filter(item => new Date(item.notAvailable[2],item.notAvailable[1],item.notAvailable[0]) > end) : this.b = this.a;

    (pickup != undefined) ? this.a =  this.b.filter(item => item.pickup === pickup) : this.a = this.b;

    (dropoff != undefined) ? this.b =  this.a.filter(item => item.dropoff.indexOf(dropoff) > -1) : this.b = this.a;

    (cannon != undefined) ? this.a =  this.b.filter(item => item.cannon === cannon) : this.a = this.b;

    (maxAcc != undefined) ? this.b =  this.a.filter(item => item.maxAcc == maxAcc) : this.b = this.a;

    (atmSpeed != undefined) ? this.a =  this.b.filter(item => item.atmosphericSpeed == atmSpeed) : this.a = this.b;

   	return (arg1 != undefined) ? this.a.filter(item => item.seats == arg1) : this.a;

  }
}