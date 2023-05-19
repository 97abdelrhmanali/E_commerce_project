import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  numOfCartItems:number = 0
  constructor(public _AuthService:AuthService , private _Router:Router, private _ProductsService:ProductsService){
    this._ProductsService.numOfCartItems.subscribe({
      next:(res)=>{
        this.numOfCartItems = res
      }
    })
  }

}
