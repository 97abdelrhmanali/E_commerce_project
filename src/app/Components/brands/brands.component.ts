import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands:any[]=[]
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.brands = res.data;
      }
    })
  }


}
