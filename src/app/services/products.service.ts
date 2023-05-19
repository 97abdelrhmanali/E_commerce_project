import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enviroment } from '../Enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseURL : string =Enviroment.baseURL
  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    this.GetProductCart().subscribe({
      next:(res)=> {
        console.log(res);
        this.numOfCartItems.next(res.numOfCartItems)
      },
    })
  }

  getAllProducts():Observable<any>{
    return this._HttpClient.get(this.baseURL + "products")
  }

  getSpecificProduct(id:string):Observable<any>{
    return this._HttpClient.get(this.baseURL+`products/${id}`)
  }

  addProducttoCard(productId:string):Observable<any>{
    return this._HttpClient.post(this.baseURL+'cart',{
      "productId" :productId
    })
  }


  GetProductCart():Observable<any>{
    return this._HttpClient.get(this.baseURL + 'cart')
  }

  UpdateCart(productID :string , count :number):Observable<any>{
    return this._HttpClient.put(this.baseURL + `cart/${productID}`,{
      count
    })
  }

  deleteCartProduct(productID :string):Observable<any>{
    return this._HttpClient.delete(this.baseURL + `cart/${productID}`)
  }

  ClearCart():Observable<any>{
    return this._HttpClient.delete(this.baseURL + `cart`)
  }


  checkout(cartID:string,shippingAddress:any):Observable<any>{
    return this._HttpClient.post(this.baseURL + `orders/checkout-session/${cartID}?url=http://localhost:4200`,{
      "shippingAddress":shippingAddress
  })
  }


  getallorders():Observable<any>{
    return this._HttpClient.get(this.baseURL+"orders")
  }


  getCategories():Observable<any>{
    return this._HttpClient.get(this.baseURL+'categories')
  }

  getBrands():Observable<any>{
    return this._HttpClient.get(this.baseURL+'brands')
  }



}
