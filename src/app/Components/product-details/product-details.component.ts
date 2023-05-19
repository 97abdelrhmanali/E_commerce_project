import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  images:any[]=[]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  productId: string = "";
  productDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){
    _ActivatedRoute.paramMap.subscribe((params)=>{
      console.log(params.get("id"));
      this.productId = params.get('id')!
      _ProductsService.getSpecificProduct(this.productId).subscribe({
        next:(res)=>{
          console.log(res);
          this.productDetails = res.data;
          this.images = res.data.images
        }
      })
    })
  }


  addProducttoCard(productID : string){
    this._ProductsService.addProducttoCard(productID).subscribe({
      next:(res)=>{
        console.log(res);
        this._ProductsService.numOfCartItems.next(res.numOfCartItems)
      }
    })
  }

}
