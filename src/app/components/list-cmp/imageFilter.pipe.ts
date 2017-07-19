import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
	a:any[];
	b:any[];
  transform(items: any[], pickup:any, dropoff:any, cannon:any, arg1:number): any {

    (pickup != undefined) ? this.a =  items.filter(item => item.pickup === pickup) : this.a = items;

    (dropoff != undefined) ? this.b =  this.a.filter(item => item.dropoff.indexOf(dropoff) > -1) : this.b = this.a;

    (cannon != undefined) ? this.a =  this.b.filter(item => item.cannon === cannon) : this.b = this.a;

   	return (arg1 != undefined) ? this.a.filter(item => item.seats == arg1) : this.a;

  }
}