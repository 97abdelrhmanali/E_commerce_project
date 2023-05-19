import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:any[] , searchTerm:string): any {
    return product.filter((product)=>{
      return product.title.toLowerCase().includes(searchTerm.toLowerCase())
    });
  }

}
