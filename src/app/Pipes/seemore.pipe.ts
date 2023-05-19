import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(productDescribtion:string , count:number): unknown {
    return productDescribtion?.split(/\s/).slice(0,count).join(" ");
  }

}
