import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[] =[];
  searchTerm:string="";

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

  constructor(private _AuthService:AuthService , private _Router:Router , private _ProductsService:ProductsService){
  }

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.products = response.data
      }
    })
  }
}
