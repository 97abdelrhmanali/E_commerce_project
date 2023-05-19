import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() product :any;
constructor(private _ProductsService:ProductsService){}

addProducttoCard(productID : string){
  this._ProductsService.addProducttoCard(productID).subscribe({
    next:(res)=>{
      console.log(res);
      this._ProductsService.numOfCartItems.next(res.numOfCartItems)
    }
  })
}
}
