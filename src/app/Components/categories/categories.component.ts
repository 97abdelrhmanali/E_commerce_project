import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categ:any[]=[]
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.categ = res.data;
      }
    })
  }

}
