import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartProducts:any[]=[]
  cardid:string=""
  UpdateSetTimeOut :any
  constructor(private _ProductsService:ProductsService){}


  ngOnInit(): void {
    this.GetProductCart()
  }
  GetProductCart(){
    this._ProductsService.GetProductCart().subscribe({
      next:(res)=>{
        console.log(res.data.products)
        this.cartProducts = res.data.products
        this.cardid = res.data._id
      }
    })
  }


  deleteCartProduct(id : string){
    let index : number
    let item : any
    for (let i = 0; i < this.cartProducts.length; i++) {
      if(this.cartProducts[i].product.id == id){
        console.log( "array = "+this.cartProducts[0].product.id);
        item = this.cartProducts[i]
        this.cartProducts.splice(i,1)
        index = i
      }
    }
    this._ProductsService.deleteCartProduct(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartProducts = res.data.products
        this._ProductsService.numOfCartItems.next(res.numOfCartItems)
      },

      error:(err)=>{
        this.cartProducts.splice(index,0,item)
      }
    })
  }

  ClearCart(){
    this._ProductsService.ClearCart().subscribe({
      next:(res)=>{
        console.log(res);
        this._ProductsService.numOfCartItems.next(0)
      }
    })
  }

  UpdateCart(id : string , count:number){
    clearTimeout(this.UpdateSetTimeOut)
    this.UpdateSetTimeOut = setTimeout(()=>{
      if(count == 0){
        this.deleteCartProduct(id)
      }
      else{
        this._ProductsService.UpdateCart(id , count).subscribe({
          next:(res)=>{
            console.log(res);
            this.cartProducts = res.data.products
          }
        })
      }
    },500)
  }


}
